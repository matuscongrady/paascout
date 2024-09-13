import { ExpandableItem } from '../../components/ExpandableItem';
import { InlineLink } from '../../components/InlineLink';
import config from '../../../SITE_CONFIG';

const faqItems = [
  {
    question: 'What is PaaS?',
    answer: [
      <p>PaaS is a platform that simplifies infrastructure management and application deployments.</p>,
      <p>It lets developers deploy their apps on their own, without having to learn DevOps.</p>
    ]
  },
  {
    question: 'Is this project open source?',
    answer: [<p>Yes, it is available under the MIT license.</p>]
  },
  {
    question: 'Can I add another provider?',
    answer: [
      <p>Yes, you can.</p>,
      <p>
        Simply submit a pull request at <InlineLink to={config.gitUrl}>github.com/matuscongrady/paascout</InlineLink>.
      </p>,
      <p>Make sure to check if the provider supports all features and provide a pricing breakdown.</p>
    ]
  },
  {
    question: 'Who is behind the project?',
    answer: [
      <p>
        This project is maintained by the founder of <InlineLink to="https://stacktape.com">Stacktape</InlineLink>.
      </p>,
      <p>
        The project is open source, allowing anyone to contribute. We allow new providers or features as long as they
        benefit at least a small group of PaaS users. Everyone welcome!
      </p>
    ]
  },
  {
    question: 'I found a mistake. Where can I report it?',
    answer: [
      <p>
        Please create a new issue at{' '}
        <InlineLink to={`${config.gitUrl}/issues/new`}>github.com/matuscongrady/paascout</InlineLink> or contact us at{' '}
        <InlineLink to="mailto:info@stacktape.com">info@stacktape.com</InlineLink>.
      </p>
    ]
  }
];

export function FAQ() {
  return (
    <section
      css={{
        display: 'flex',
        margin: '80px 0px',
        justifyContent: 'center',
        padding: '0 15px'
      }}
    >
      <div css={{ maxWidth: '850px', flex: 1 }}>
        <h2>FAQ</h2>
        {faqItems.map((faqItem) => (
          <ExpandableItem
            title={faqItem.question}
            expandedContent={<div css={{ p: { margin: '8px 0px' } }}>{faqItem.answer}</div>}
            key={faqItem.question}
          />
        ))}
      </div>
    </section>
  );
}
