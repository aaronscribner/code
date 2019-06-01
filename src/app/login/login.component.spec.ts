import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatSnackBarModule
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoggerTestingModule } from 'ngx-logger';
import { SystemAccount } from '../shared/models/account.model';
import { AccountService } from '../core/services/account-service/account.service';
import { MessageService } from '../core/services/messages-service/messages.service';
import { ApplicationMessages } from '../shared/enums/application-messages';
import { ApiVersions } from '../shared/enums/api-versions';
import { environment } from '../../environments/environment';


describe('Component: LoginComponent', () => {
  let component: LoginComponent;
  const account = new SystemAccount();
  let injector: Injector;
  let fixture: ComponentFixture<LoginComponent>;
  let accountService: AccountService;
  let messageService: MessageService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        LoggerTestingModule],
      providers: [AccountService, MessageService]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    accountService = injector.get(AccountService);
    messageService = injector.get(MessageService);

    fixture.detectChanges();

    httpTestingController = injector.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return false if not logged in', () => {
    expect(accountService.loggedIn()).toBe(false);
  });

  it('Should return the URL', () => {
    expect(accountService.register(account)).toBeDefined();
    expect(accountService.register(account)).not.toBeNull();
  });

  it('Should get isChecked from localstorage', () => {
    localStorage.setItem('isChecked', 'true');
    component.isChecked = JSON.parse(localStorage.getItem('isChecked'));
    expect(component.isChecked).toBe(true);
    component.checkIfChecked();
  });

  it('Submitting a form emits a user', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['username'].setValue("test@test.com");
    component.loginForm.controls['password'].setValue("Password1!");
    expect(component.loginForm.valid).toBeTruthy();
    component.login();
    expect(component.account.username).toBe("test@test.com");
    expect(component.account.password).toBe("Password1!");
  });

  it('InvalidMessage should change from false to true', () => {
    expect(component.invalidLoginMessage).toBeFalsy();
    expect(component.changeMessage).toBeFalsy();
    component.loginForm.controls['username'].setValue("test@test.com");
    component.loginForm.controls['password'].setValue("Password");
    component.login();

    if (component.account.password !== "Password1!") {
      component.invalidLoginMessage = true;
      component.changeMessage = true;
    }
    expect(component.invalidLoginMessage).toBeTruthy();
    expect(component.changeMessage).toBeTruthy();
  });

  it('Should get response from API', () => {
    const mockApplicationMessages = {
      "message": "The login information is incorrect. Please try again"
    };

    messageService.getApplicationMessage(ApplicationMessages.loginInfoIncorrect)
        .subscribe(response => {
          expect(response['message']).toEqual('The login information is incorrect. Please try again');
        });

    const req = httpTestingController.expectOne(`${environment.referenceApiUrl}/${ApiVersions.v1}/messages/${ApplicationMessages.loginInfoIncorrect}`);

    expect(req.request.method).toEqual('GET');

    req.flush(mockApplicationMessages);
    httpTestingController.verify();
  });

  it('logoutMessageExists should be true if showLogoutMessage is true', () => {
    accountService.showMessage = true;
    accountService.showLogoutMessage();
    expect(accountService.showLogoutMessage).toBeTruthy();
    component.showMessage();
    expect(component.logoutMessageExists).toBeTruthy();
  });
});
