import {
  api,
  body,
  draft,
  endpoint,
  headers,
  request,
  response,
  String,
  test
} from "@airtasker/spot";

@api({ name: "company-api" })
class CompanyApi {}

@draft
@endpoint({
  method: "POST",
  path: "/companies"
})
class CreateCompany {
  @request
  request(@body body: CreateCompanyRequestBody) {}

  @response({ status: 201 })
  successResponse(@body body: CompanyBody) {}

  @test({
    request: {
      body: {
        name: "My Company",
        private: true
      }
    },
    response: {
      status: 201
    }
  })
  successResponseTest() {}
}

interface CreateCompanyRequestBody {
  name: String;
  private: boolean;
}

interface CompanyBody {
  name: String;
}
