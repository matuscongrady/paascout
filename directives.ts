export const getWebDomains = (stage: string): { domainName: string }[] => {
  if (stage === 'prod' || stage === 'production') {
    return [{ domainName: 'stacktape.com' }, { domainName: 'www.stacktape.com' }];
  }
  return [{ domainName: `${stage}-web.stacktape.com` }];
};
