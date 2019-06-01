import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ServicesModule } from './services/services.module';
import { HttpServicesModule } from './http-services/http-services.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ServicesModule,
    HttpServicesModule,
    // Logging service
    // LoggerModule.forRoot(
    //     {
    //       serverLoggingUrl: `${environment.logApiUrl}/${ApiVersions.v1}/logging/error`,
    //       level: NgxLoggerLevel.DEBUG,
    //       serverLogLevel: NgxLoggerLevel.ERROR,
    //       disableConsoleLogging: environment.production
    //     })
  ],
  declarations: [],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ServicesModule,
    HttpServicesModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('SSTCoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
