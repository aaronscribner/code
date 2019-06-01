

// hello.js
module.exports = (req, res, next) => {
    if (req.url.includes('connect/token')) {
        res.send(
            {
                "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyZWZhNjk5M2QwOGEyMTAwNTBhNGIzNjc1NWNhOGMwIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1NTIzMzUzMDUsImV4cCI6MTU1MjMzODkwNSwiaXNzIjoiaHR0cDovL2Rldi1yZXNvbHZlci1pZGVudGl0eS1hcGkuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJodHRwOi8vZGV2LXJlc29sdmVyLWlkZW50aXR5LWFwaS5henVyZXdlYnNpdGVzLm5ldC9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJyZXNvbHZlci53ZWIiLCJzdWIiOiI2OGQyYzkxNS1mZjliLTQ5ZGQtYjkzMC04M2M1ZDUyZTE4ZjYiLCJhdXRoX3RpbWUiOjE1NTIzMzUzMDUsImlkcCI6ImxvY2FsIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.UobGakAjri2YIyRgqgYbjXmsml8uE0UEc8RgoJZp5mj9l5RI9EASWq4_7BqhDjuq9u3065ap9ZbJvo6wntGNO2JEmn7_F5EcJjZn0-aCj-3EvZral-CoxEK4YsdohacmPH6HHVRxTHYGx2buHvTOA6Fc15g8-4wW1FbgvahPhz4RYJIGhzGiSKzjtB2Mkr5Je9eTJL4orZeXTO523OhF4Q_UUJ7teRLTPNTKOHDsQA4tCWH012JS11a8r0n6sUG8hNpCXGKmnrQtDOyAV_ESzfnc0mTxlnyEVTRCB284glPTlLB1NIDg3pVwbXAwwi7Rr5BfjYzxudIRJVc9XCm74w",
                "expires_in": 3600,
                "token_type": "Bearer"
            }
        );
    }
    else {
        next();
    }
}