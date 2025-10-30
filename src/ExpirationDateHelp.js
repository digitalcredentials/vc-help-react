export const ExpirationDateHelp = () => {
  return <>
    <p>This is mostly straightforward - the credential is considered 'expired' once the given date has passed.</p>
    <p>The date is set directly in the Verifiable Credential.</p>
    <p>For version 1 Verifiable Credentials, the date is set like so:</p>
    <pre>"expirationDate": "2025-01-09T16:23:24Z"</pre>
    <p>For version 2 Verifiable Credentials, the date is set like so:</p>
    <pre>"validUntil": "2025-01-09T16:23:24Z"</pre>

    <p>One nuance, though, is that sometimes a credential is still useful even though it has expired. An expired driver's licence, for
      example, can still be used to prove our age. Or to prove that we were in fact authorized to drive during a given period, 
      which might be useful when applying for a job that requires some number of years of driving experience.
    </p>
  </>
}