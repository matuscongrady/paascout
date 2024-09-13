/* eslint-disable quotes */
import StacktapeIcon from '../icons/stacktape.svg';
import FlyIoIcon from '../icons/fly-io.svg';
import HerokuIcon from '../icons/heroku.svg';
import RenderIcon from '../icons/render.svg';
import VercelIcon from '../icons/vercel.svg';
import RailwayIcon from '../icons/railway.svg';
import PorterIcon from '../icons/porter-run.jpg';
import FlightcontrolIcon from '../icons/flightcontrol.svg';
import CoherenceIcon from '../icons/coherence.svg';
import { BiArchive, BiCheckShield, BiCloudUpload, BiGlobe } from 'react-icons/bi';
import { HiOutlineDatabase } from 'react-icons/hi';
import { HiOutlineServerStack } from 'react-icons/hi2';
import { GrDocumentConfig } from 'react-icons/gr';
import { TbUserScreen } from 'react-icons/tb';

export const pricingFeatures: ComparedFeature[] = [
  {
    name: 'Free tier',
    explanation: 'The PaaS provider allows you to run at least some application(s) entirely free',
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'y',
      Heroku: 'n',
      Railway: '~',
      Porter: 'Limited time',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  }
];

const deploymentLocationFeatures: ComparedFeature[] = [
  {
    name: 'Amazon Web Services',
    explanation: 'The provider can deploy to your own Amazon Web Services account.',
    whenDoINeedThis: [
      'You want the ability to manage your infrastructure yourself, once you outgrow the PaaS, without having to do a full migration.',
      'You want to leverage your free AWS activate credits.',
      'You want to use the largest and most advanced cloud provider.',
      'You already have workloads running on AWS.'
    ],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'y',
      Render: 'n',
      Stacktape: 'y',
      Vercel: 'n'
    }
  },
  {
    name: 'Google CLoud Platform',
    explanation: 'The provider can deploy to your own Google Cloud Platform account.',
    whenDoINeedThis: [
      'You want the ability to manage your infrastructure yourself, once you outgrow the PaaS, without having to do a full migration.',
      'You want to leverage your free Google for Startups Cloud Program credits.',
      'You already have workloads running in Google Cloud.'
    ],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'n',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'y',
      Render: 'n',
      Stacktape: 'n',
      Vercel: 'n'
    }
  },
  {
    name: 'Microsoft Azure',
    explanation: 'The provider can deploy to your own Microsoft Azure account.',
    whenDoINeedThis: [
      'You want the ability to manage your infrastructure yourself, once you outgrow the PaaS, without having to do a full migration.',
      'You want to leverage your free Microsoft Azure credits.',
      'You already have workloads running on Microsoft Azure.'
    ],
    columns: {
      Coherence: 'n',
      Flightcontrol: 'n',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'y',
      Render: 'n',
      Stacktape: 'n',
      Vercel: 'n'
    }
  },
  {
    name: 'Hosted by provider',
    explanation:
      "The provider hosts your application. You don't have to connect other infrastructure provider account.",
    whenDoINeedThis: ['You want to have the simplest DX possible, without having to create another cloud account.'],
    columns: {
      Coherence: 'n',
      Flightcontrol: 'n',
      Fly: 'y',
      Heroku: 'y',
      Railway: 'y',
      Porter: 'y',
      Render: 'y',
      Stacktape: 'n',
      Vercel: 'y'
    }
  },
  {
    name: 'Supported regions',
    explanation: 'The amount of geographic regions supported by the provider.',
    whenDoINeedThis: ['You want your servers to be as close as possible to your users.'],
    disableFiltering: true,
    columns: {
      Coherence: 68,
      Flightcontrol: 28,
      Fly: 38,
      Heroku: 12,
      Railway: 4,
      Porter: '128+',
      Render: 5,
      Stacktape: 28,
      Vercel: 18
    }
  }
];

const supportedComputeResourcesFeatures: ComparedFeature[] = [
  {
    name: 'Containers',
    explanation: 'Ability to deploy application code as containers.',
    whenDoINeedThis: ['You want to have the most flexibility in what applications you can deploy.'],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'y',
      Heroku: 'y',
      Railway: 'y',
      Porter: 'y',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'n'
    }
  },
  {
    name: 'Serverless functions',
    explanation: 'Ability to deploy application code as a serverless function (AWS Lambda, etc.).',
    whenDoINeedThis: [
      'Your application has unpredictable traffic patterns.',
      "You don't want to pay for idle server time."
    ],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'n',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'n',
      Render: 'n',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'Container platform',
    disableFiltering: true,
    explanation: (
      <div>
        <p>Platform used to run container workloads.</p>
        <ul>
          <li>ECS = Amazon Elastic container service</li>
          <li>EKS = Amazon Kubernetes service</li>
          <li>GKE = Google Kubernetes engine</li>
          <li>GCR = Google Cloud Run</li>
          <li>AKS = Azure Kubernetes service</li>
          <li>Custom = custom container orchestrator</li>
        </ul>
      </div>
    ),
    columns: {
      Coherence: 'ECS + GKE + GCR',
      Flightcontrol: 'ECS',
      Fly: 'Custom + K8S',
      Heroku: 'Custom',
      Railway: 'Custom',
      Porter: 'EKS + GKE + AKS',
      Render: 'Custom',
      Stacktape: 'ECS',
      Vercel: 'N/A'
    }
  },
  {
    name: 'CRON jobs',
    explanation: 'The PaaS provider supports scheduled CRON jobs.',
    whenDoINeedThis: ['You want to run some computational tasks on a schedule.'],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'y',
      Heroku: 'y',
      Railway: 'y',
      Porter: 'y',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'Kubernetes',
    explanation: 'The PaaS provider allows you to run containers inside a managed Kubernetes cluster.',
    whenDoINeedThis: ['You have experience using Kubernetes and want to leverage its ecosystem.'],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'n',
      Fly: 'y',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'y',
      Render: 'n',
      Stacktape: 'n',
      Vercel: 'n'
    }
  },
  {
    name: 'GPU workloads',
    explanation: 'The PaaS provider supports GPU-accelerated instances for your workloads.',
    whenDoINeedThis: ['You have heavy computational workloads, for example AI training or AI inference.'],
    columns: {
      Coherence: 'n',
      Flightcontrol: 'y',
      Fly: 'y',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'y',
      Render: 'n',
      Stacktape: 'y',
      Vercel: 'n'
    }
  }
];

const supportedDatabaseResourcesFeatures: ComparedFeature[] = [
  {
    name: 'Postgres',
    explanation: (
      <div>
        <p>Ability to run a fully-managed Postgres database.</p>
        <p>
          The database is considered "fully-managed" when the provider takes care of operational tasks, such as backups,
          patching, monitoring, failure recovery, etc.
        </p>
      </div>
    ),
    whenDoINeedThis: ['You want to store your data in the most popular SQL database.'],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'y',
      Heroku: 'y',
      Railway: 'y',
      Porter: 'y',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'MySQL',
    explanation: (
      <div>
        <p>Ability to run a fully-managed MySQL database.</p>
        <p>
          The database is considered "fully-managed" when the provider takes care of operational tasks, such as backups,
          patching, monitoring, failure recovery, etc.
        </p>
      </div>
    ),
    whenDoINeedThis: ['You have an application that requires MySQL database.'],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'n',
      Render: 'n',
      Stacktape: 'y',
      Vercel: 'n'
    }
  },
  {
    name: 'HA SQL DB cluster',
    explanation: (
      <div>
        <p>
          Support for HA (High availability) SQL database cluster with 3 or more physically distributed replication
          nodes.
        </p>
      </div>
    ),
    whenDoINeedThis: [
      'You need high resilience for your database.',
      'You need high availability for your database.',
      'You need a "high 9s" SLA.'
    ],
    columns: {
      Coherence: 'n',
      Flightcontrol: 'n',
      Fly: 'n',
      Heroku: 'n',
      Railway: '~',
      Porter: 'n',
      Render: 'n',
      Stacktape: 'y',
      Vercel: '~'
    }
  },
  {
    name: 'Redis',
    explanation: (
      <div>
        <p>Ability to run a fully-managed Redis (or any alternative Redis flavor).</p>
        <p>
          The database is considered "fully-managed" when the provider takes care of operational tasks, such as backups,
          patching, monitoring, failure recovery, etc.
        </p>
      </div>
    ),
    whenDoINeedThis: ['Your application requires a fast, in-memory cache database.'],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'y',
      Heroku: 'addon',
      Railway: 'y',
      Porter: 'n',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'ElasticSearch',
    explanation: (
      <div>
        <p>Ability to run a fully-managed ElasticSearch (or any alternative ElasticSearch flavor).</p>
        <p>
          The database is considered "fully-managed" when the provider takes care of operational tasks, such as backups,
          patching, monitoring, failure recovery, etc.
        </p>
      </div>
    ),
    whenDoINeedThis: [
      'Your application requires a fast, in-memory full-text search, or to aggregate and analyze a huge amounts of logs data.'
    ],
    columns: {
      Coherence: 'n',
      Flightcontrol: 'n',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'n',
      Render: 'n',
      Stacktape: 'y',
      Vercel: 'n'
    }
  },
  {
    name: 'MongoDB',
    explanation: (
      <div>
        <p>Ability to run a fully-managed MongoDB.</p>
        <p>
          The database is considered "fully-managed" when the provider takes care of operational tasks, such as backups,
          patching, monitoring, failure recovery, etc.
        </p>
      </div>
    ),
    whenDoINeedThis: ['You have an application that requires MongoDB database.'],
    columns: {
      Coherence: 'n',
      Flightcontrol: 'n',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'y',
      Porter: 'n',
      Render: 'n',
      Stacktape: 'y',
      Vercel: 'n'
    }
  },
  {
    name: 'Vector database',
    explanation: (
      <div>
        <p>Ability to create and use a vector database.</p>
        <p>
          The feature is also considered as supported, if the providers supports pgvector extension for PostgresSQL
          database.
        </p>
      </div>
    ),
    whenDoINeedThis: [
      'You are building an AI application, and need to efficiently store and query textual data in a form of multi-dimensional vectors (vector embeddings).'
    ],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'y',
      Heroku: 'y',
      Railway: 'y',
      Porter: 'y',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  }
];

const otherSupportedResourcesFeatures: ComparedFeature[] = [
  {
    name: 'Block storage (Blob)',
    explanation:
      'The PaaS provider supports creation of a block storage resource (such as Amazon S3) where you can store your application files.',
    whenDoINeedThis: ['Your application requires a persistent file storage.'],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'y',
      Heroku: 'y',
      Railway: '~',
      Porter: '~',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'CDN',
    explanation: (
      <div>
        <p>
          The PaaS provider allows you to put a CDN (Content delivery network) in front of your public facing resources.
        </p>
        <p>
          CDNs can protect your application from DDoS attacks and decrease the latency by caching data or files at
          hundreds of edge locations, geographically close to your users.
        </p>
      </div>
    ),
    whenDoINeedThis: [
      'You want increased resiliency from DDoS attack.',
      'You want lower latency for your users.',
      'You want to save infrastructure costs by returning cached responses.'
    ],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'n',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'n',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'Message Queue',
    explanation: (
      <div>
        <p>The PaaS provider supports a fully-managed message queue service, such as Amazon SQS or Google Pub/Sub.</p>
        <p>Message queues are used to de-couple services, especially in a micro service based architecture.</p>
      </div>
    ),
    whenDoINeedThis: ['You want to create an event-driven architecture.'],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'n',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'n',
      Render: 'n',
      Stacktape: 'y',
      Vercel: 'y'
    }
  }
];

const deploymentOptionsFeatures: ComparedFeature[] = [
  {
    name: 'Deploy using web GUI',
    explanation: 'Deploy by pressing a button in a console (admin) web UI.',
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'n',
      Heroku: 'y',
      Railway: 'y',
      Porter: 'y',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'Deploy using CLI',
    explanation: (
      <div>
        <p>Deploy by local system using provider CLI.</p>
        <p>
          Deployment from CLI means that the build is done (and cached) locally on the developer's system, and therefore
          in many cases significantly faster than CI builds.
        </p>
      </div>
    ),
    whenDoINeedThis: [
      'You prefer working from terminal.',
      'You want to lower deployment time and local development iteration time.'
    ],
    columns: {
      Coherence: '~',
      Flightcontrol: 'n',
      Fly: 'y',
      Heroku: 'y',
      Railway: 'y',
      Porter: 'y',
      Render: '~',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  // {
  //   name: 'Deploy using SDK',
  //   explanation: (
  //     <div>
  //       <p>Deploy using SDK</p>
  //       <p>Deployment using a programmatic SDK (for example, python or javascript)</p>
  //       <p>
  //         This is helpful, if you need to create a more complex deployment pipeline, when using the CLI would be less
  //         convenient and more complex
  //       </p>
  //     </div>
  //   ),
  //   columns: {
  //     Coherence: 'n',
  //     Flightcontrol: 'n',
  //     Fly: 'n',
  //     Heroku: 'n',
  //     Railway: 'n',
  //     Porter: 'n',
  //     Render: 'n',
  //     Stacktape: 'y',
  //     Vercel: 'n'
  //   }
  // },
  {
    name: 'Deploy from Github',
    explanation: (
      <div>
        <p>
          The PaaS provider allows you to perform git-push based deployments and/or preview deployments from source code
          stored in Github repository
        </p>
        <p>
          The feature is considered partially supported (~), if the provider doesn't support it natively, i.e. requires
          you to perform several steps and a create a pipeline file (.github/workflows)
        </p>
      </div>
    ),
    whenDoINeedThis: [
      'Your source code is stored in Github and you want your code to be automatically deployed on every push to the selected branch.'
    ],
    columns: {
      Coherence: '~',
      Flightcontrol: 'y',
      Fly: '~',
      Heroku: '~',
      Railway: '~',
      Porter: '~',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'Deploy from Gitlab',
    explanation: (
      <div>
        <p>
          The PaaS provider allows you to perform git-push based deployments and/or preview deployments from source code
          stored in Gitlab repository
        </p>
        <p>
          The feature is considered partially supported (~), if the provider doesn't support it natively, i.e. requires
          you to perform several steps and a create a pipeline file (.gitlab-ci.yml)
        </p>
      </div>
    ),
    whenDoINeedThis: [
      'Your source code is stored in Gitlab and you want your code to be automatically deployed on every push to the selected branch.'
    ],
    columns: {
      Coherence: '~',
      Flightcontrol: 'n',
      Fly: '~',
      Heroku: '~',
      Railway: '~',
      Porter: 'n',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'Deploy from Bitbucket',
    explanation: (
      <div>
        <p>
          The PaaS provider allows you to perform git-push based deployments and/or preview deployments from source code
          stored in Bitbucket repository
        </p>
        <p>
          The feature is considered partially supported (~), if the provider doesn't support it natively, i.e. requires
          you to perform several steps and a create a pipeline file (bitbucket-pipelines.yml)
        </p>
      </div>
    ),
    whenDoINeedThis: [
      'Your source code is stored in Bitbucket and you want your code to be automatically deployed on every push to the selected branch.'
    ],
    columns: {
      Coherence: '~',
      Flightcontrol: 'n',
      Fly: '~',
      Heroku: '~',
      Railway: '~',
      Porter: 'n',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'Preview environments',
    explanation: (
      <div>
        <p>
          Preview environments (deployments) create a short-lived environment for every Pull Request. Here's how it
          works:
        </p>
        <ol>
          <li>You create a pull request to a branch which has preview environments configured.</li>
          <li>Provider creates an ephemeral (short lived) environment and deploys your application to it.</li>
          <li>
            Provider creates a comment in the Pull Request with details regarding the new deployed environment. For
            example, website URL or API URL, etc.
          </li>
          <li>
            If you make any changes to the branch from which the Pull Request was created, the application is
            re-deployed.
          </li>
          <li>Once the Pull Request is closed or merged, the environment is deleted.</li>
        </ol>
      </div>
    ),
    whenDoINeedThis: [
      'You want every Pull Request to be easily testable.',
      'You want to approve changes before deploying them (for example, by a marketing team).'
    ],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'n',
      Heroku: 'y',
      Railway: 'y',
      Porter: '~',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  }
];

const configurationFeatures: ComparedFeature[] = [
  {
    name: 'Using GUI',
    explanation: (
      <div>
        <p>
          The The PaaS provider allows you to configure infrastructure details (such as container size, CPU, memory,
          databases, etc.) using a web-based admin UI.
        </p>
      </div>
    ),
    whenDoINeedThis: ['You want to be able to deploy apps from anywhere, simply by logging to Admin UI.'],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'n',
      Heroku: 'y',
      Railway: 'y',
      Porter: 'y',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'Using IaC',
    explanation: (
      <div>
        <p>
          The provider supports Infrastructure as a Code - allowing you to configure infrastructure details (such as
          container size, CPU, memory, databases, etc.) using code.
        </p>
      </div>
    ),
    whenDoINeedThis: [
      'Your infrastructure is more complex',
      'You want to re-use the configuration for multiple environments',
      'You want to version-control your infrastructure configuration so that it can be code-reviewed'
    ],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: '?',
      Heroku: '~',
      Railway: 'y',
      Porter: 'y',
      Render: 'y',
      Stacktape: 'y',
      Vercel: '~'
    }
  },
  {
    name: 'Configurability',
    disableFiltering: true,
    explanation: (
      <div>
        <p>
          How many aspects of the underlying infrastructure and/or deployment process the The PaaS provider allows you
          to configure.
        </p>
        <ul>
          <li>
            <b>low</b> means that only a few things can be configured, and the provider is mostly "zero-config"
          </li>
          <li>
            <b>medium</b> means that the most common aspects can be configured, but some advanced things may be missing
          </li>
          <li>
            <b>high</b> means that you are able to configure everything you'd expect from a big infrastructure providers
            such as AWS or GCP
          </li>
        </ul>
      </div>
    ),
    columns: {
      Coherence: 'medium',
      Flightcontrol: 'medium',
      Fly: 'medium',
      Heroku: 'medium',
      Railway: 'medium',
      Porter: 'medium',
      Render: 'medium to high',
      Stacktape: 'high',
      Vercel: 'medium'
    }
  }
];

const frontendFeatures: ComparedFeature[] = [
  {
    name: 'Static hosting',
    explanation: (
      <div>
        <p>
          The provider supports convenient, scalable, performant and cost-efficient hosting of static content and static
          sites.
        </p>
        <p>The feature is considered supported when: </p>
        <ul>
          <li>The provider doesn't require running a container to serve the static content.</li>
          <li>
            The provider allows you to attach a CDN to cache the requests. This is used to improve performance, lower
            costs and protect you from DDoS attacks.
          </li>
          <li>You can build and upload the static content as a part of the deployment process.</li>
        </ul>
      </div>
    ),
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'n',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'SPA hosting',
    explanation: (
      <div>
        <p>
          The provider supports convenient, scalable, performant and cost-efficient hosting of Single Page Applications.
        </p>
        <p>The feature is considered supported when: </p>
        <ul>
          <li>The provider doesn't require running a container to serve the static content.</li>
          <li>
            The provider allows you to attach a CDN to cache the requests. This is used to improve performance, lower
            costs and protect you from DDoS attacks.
          </li>
          <li>You can build and upload the static content as a part of the deployment process.</li>
        </ul>
      </div>
    ),
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'n',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'Serverless Next.js',
    explanation: (
      <div>
        <p>Support for hosting Next.js applications using serverless and/or edge functions.</p>
      </div>
    ),
    whenDoINeedThis: [
      <p>
        <b>Lower costs</b> when there is lower or inconsistent traffic
      </p>,
      <p>
        <b>Lower latency</b>, especially when the pages are rendered at the edge
      </p>,
      <p>
        <b>Automatic builds</b> means that users don't need to worry about writing Dockerfile and building the container
        image
      </p>
    ],
    columns: {
      Coherence: 'n',
      Flightcontrol: 'n',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'n',
      Render: 'n',
      Stacktape: 'y',
      Vercel: 'y'
    }
  }
];

const securityFeatures: ComparedFeature[] = [
  {
    name: 'Secrets',
    explanation: (
      <div>
        <p>The provider support creating and managing secrets.</p>
        <p>Secrets can be used to store sensitive data, such as API keys or database credentials.</p>
      </div>
    ),
    whenDoINeedThis: [
      'Pretty much every time you have a production application that requires database credentials, API keys or API tokens.'
    ],
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'y',
      Heroku: 'y',
      Railway: 'y',
      Porter: 'y',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'Alarms',
    explanation: (
      <div>
        <p>
          Ability to get notified about important event happening to your application, such memory elevated API error
          rates, container or database memory usage, etc.
        </p>
      </div>
    ),
    whenDoINeedThis: ['Most likely every time you have a mission-critical production application.'],
    columns: {
      Coherence: 'n',
      Flightcontrol: 'n',
      Fly: 'n',
      Heroku: 'addon',
      Railway: 'n',
      Porter: '~',
      Render: '~',
      Stacktape: 'y',
      Vercel: 'n'
    }
  },
  {
    name: 'Firewall',
    explanation: (
      <div>
        <p>Ability to connect a firewall (Web Application Firewall) to your internet facing resources.</p>
        <p>
          The firewall is a service that protects you from common web exploits that can affect application availability,
          compromise security, or consume excessive resources.
        </p>
      </div>
    ),
    whenDoINeedThis: ['Most likely every time you have a internet-facing production application.'],
    columns: {
      Coherence: 'n',
      Flightcontrol: 'n',
      Fly: 'n',
      Heroku: 'n',
      Railway: 'n',
      Porter: 'n',
      Render: 'n',
      Stacktape: 'y',
      Vercel: 'y'
    }
  },
  {
    name: 'Private networking',
    explanation: (
      <div>
        <p>
          Ability to deploy both services (containers or functions) and databases inside a private (not internet
          accessible) network.
        </p>
      </div>
    ),
    whenDoINeedThis: [
      'You want your infrastructure to be more secure.',
      "You have compliance obligations that doesn't allow your workloads to be accessible over the internet."
    ],
    // @todo
    columns: {
      Coherence: 'y',
      Flightcontrol: 'y',
      Fly: 'y',
      Heroku: 'y',
      Railway: 'y',
      Porter: 'y',
      Render: 'y',
      Stacktape: 'y',
      Vercel: 'Enterprise only'
    }
  }
];

export const providerPrices: {
  [size in ComparableInfrastructureSize]: {
    [competitor in ComparableProvider]: {
      description?: string;
      items: { [name: string]: { cost: number; description: string } };
    };
  };
} = {
  Small: {
    Railway: {
      items: {
        Compute: { cost: 80, description: '2 vCpu, 4 GB' },
        'Service fee': { cost: 40, description: 'Pro plan with 2 seats' }
      }
    },
    Flightcontrol: {
      items: {
        Compute: { cost: 55, description: 'c6a.large instance (2 vCpu, 4 GB)' },
        NAT: { cost: 32, description: 'NAT address translator' },
        'Load balancing': {
          cost: 17,
          description: 'Load Balancer + $0.008 per LCU-hour (LCU depends on amount of traffic)'
        },
        'Public IPs': { cost: 7, description: 'Public IPs of load balancer' },
        'Service fee': { cost: 49, description: 'Starter plan' }
      }
    },
    Porter: {
      items: {
        Compute: { cost: 60, description: 'Porter cloud - 2 vCpu, 4 GB' }
      }
    },
    Render: {
      items: {
        Compute: { cost: 85, description: 'Pro service (2 vCpu, 4 GB)' },
        'Service fee': { cost: 38, description: 'Team plan with 2 seats' }
      }
    },
    Stacktape: {
      items: {
        Compute: { cost: 55, description: 'c6a.large instance (2 vCpu, 4 GB)' },
        'Public IPs': { cost: 3.5, description: 'Public IP for instance' },
        'Load balancing': { cost: 0.5, description: 'API Gateway + Cloudmap + $1 per million requests' }
      }
    },
    Heroku: {
      items: {
        Compute: { cost: 250, description: 'Performance M dyno (12 x compute, 2.5 GB)' }
      }
    },
    Fly: {
      items: {
        Compute: { cost: 62, description: 'Performance-2X (2 vCpu, 4 GB)' }
      }
    },
    Coherence: {
      items: {
        'Compute resources': {
          cost: 55,
          description: 'c6a.large instance (2 vCpu, 4 GB)'
        },
        NAT: { cost: 32, description: 'Network Address Translator' },
        'Load Balancing': {
          cost: 17,
          description: 'Load Balancer + $0.008 per LCU-hour (LCU depends on amount of traffic)'
        },
        'Public IPs': { cost: 7, description: 'Public IPs of load balancer' },
        'Service Fee': { cost: 70, description: 'Startup plan with 2 seats' }
      }
    },
    Vercel: {
      items: null
    }
  },
  Medium: {
    Railway: {
      items: {
        Compute: { cost: 160, description: '2 x (2 vCpu, 4 GB)' },
        Postgres: { cost: 120, description: 'Postgres 2 vCpu, 8 GB' },
        'Service fee': { cost: 60, description: 'Pro plan with 3 seats' }
      }
    },
    Flightcontrol: {
      items: {
        Compute: { cost: 110, description: '2 x c6a.large instance (2 vCpu, 4 GB)' },
        NAT: { cost: 32, description: 'NAT address translator' },
        Postgres: { cost: 114.48, description: 'Postgres db.m6g.large instance (2 vCpu, 8 GB)' },
        'Load balancing': {
          cost: 34,
          description: '2 x Load Balancer + $0.008 per LCU-hour (LCU depends on amount of traffic)'
        },
        'Public IPs': { cost: 14, description: '4 x Public IPs of load balancers' },
        'Service fee': { cost: 49, description: 'Starter plan' }
      }
    },
    Porter: {
      items: {
        'k8s cluster': { cost: 225, description: 'Kubernetes cluster (flat fee)' },
        Compute: {
          cost: 220,
          description:
            '2 x c6a.xlarge instance (4 vCpu, 8 GB) - 2x web service (2 vCpu, 4 GB) and Postgres (2 vCpu, 8 GB)'
        },
        'Service fee': { cost: 200, description: '$13 for each managed vCpu + $6 for each managed memory GB' }
      }
    },
    Render: {
      items: {
        Compute: { cost: 170, description: '2 x Pro service (2 vCpu, 4 GB)' },
        Postgres: { cost: 185, description: 'Postgres Pro Plus service (4 vCpu, 8 GB)' },
        'Service fee': { cost: 57, description: 'Team plan with 3 seats' }
      }
    },
    Stacktape: {
      items: {
        Compute: { cost: 110, description: '2x c6a.large instance (2 vCpu, 4 GB)' },
        'Public IPs': { cost: 7, description: '2 x Public IP for instance' },
        Postgres: { cost: 114.48, description: 'Postgres db.m6g.large instance (2 vCpu, 8 GB)' },
        'Load balancing': { cost: 0.5, description: 'API Gateway + Cloudmap + $1 per million requests' },
        'Service fee': { cost: 69.6, description: 'Stacktape flexible tier 30%' }
      }
    },
    Heroku: {
      items: {
        Compute: { cost: 500, description: '2x Performance M dyno (12 x compute, 2.5 GB)' },
        Postgres: { cost: 200, description: 'Standard Heroku Postgres' }
      }
    },
    Fly: {
      items: {
        Compute: { cost: 124, description: '2x Performance-2X (2 vCpu, 4 GB)' },
        Postgres: { cost: 82, description: 'Performance-2X (2 vCpu, 8 GB, 20 GB storage)' }
      }
    },
    Coherence: {
      items: {
        'Compute resources': {
          cost: 110,
          description: '2 x c6a.large instance (2 vCpu, 4 GB)'
        },
        NAT: { cost: 32, description: 'Network Address Translator' },
        Postgres: {
          cost: 114.48,
          description: 'Postgres db.m6g.large instance (2 vCpu, 8 GB)'
        },
        'Load Balancing': {
          cost: 34,
          description: '2 x Load Balancer + $0.008 per LCU-hour (LCU depends on amount of traffic)'
        },
        'Public IPs': { cost: 14, description: '4 x Public IPs of load balancers' },
        'Service Fee': { cost: 105, description: 'Startup plan with 3 seats' }
      }
    },
    Vercel: {
      items: null
    }
  },
  Large: {
    Railway: {
      items: {
        Compute: { cost: 480, description: '12 vCpu and 24 GB for 4 x web service + 2 x worker service' },
        Postgres: { cost: 240, description: '2x Postgres 2 vCpu 8 GB' },
        Redis: { cost: 80, description: 'Redis 2 vCpu 4 GB' },
        'Service fee': { cost: 100, description: 'Pro plan with 5 seats' }
      }
    },
    Flightcontrol: {
      items: {
        Compute: {
          cost: 330.5,
          description: '6x c6a.large instance (2 vCpu, 4 GB) for 4 x web service + 2 x worker service'
        },
        NAT: { cost: 64, description: '2x Network Address Translator' },
        Postgres: { cost: 229, description: '2x Postgres db.m6g.large instance (2 vCpu, 8 GB)' },
        Redis: { cost: 107, description: 'Redis cache.m6g.large instance (2 vCpu, 6.4 GB)' },
        'Load balancing': {
          cost: 68,
          description: '4 x Load Balancer (4 x web service) + $0.008 per LCU-hour (LCU depends on amount of traffic)'
        },
        'Public IPs': { cost: 28, description: '8 x Public IPs of load balancers' },
        'Service fee': { cost: 249, description: 'Business plan' }
      }
    },
    Porter: {
      items: {
        'k8s cluster': { cost: 225, description: 'Kubernetes cluster (flat fee)' },
        Compute: {
          cost: 661,
          description:
            '6x c6a.xlarge instance (4 vCpu 8 GB) for 4 x web service (2 vCpu, 4 GB) + 2 x worker service (2 vCpu, 4 GB) + 2 x Postgres (2 vCpu, 8 GB) + 1 x Redis (2 vCpu, 4 GB)'
        },
        'Service fee': { cost: 600, description: '$13 for each managed vCpu + $6 for each managed memory GB' }
      }
    },
    Render: {
      items: {
        Compute: {
          cost: 510,
          description: '4 x Pro web service (2 vCpu, 4 GB) + 2 x Pro background worker (2 vCpu, 4 GB)'
        },
        Postgres: {
          cost: 370,
          description: '2 x Postgres Pro Plus service (4 vCpu, 8 GB)'
        },
        Redis: { cost: 135, description: 'Redis Pro service' },
        'Service fee': { cost: 145, description: 'Organization plan with 5 seats' }
      }
    },
    Stacktape: {
      items: {
        Compute: {
          cost: 330.5,
          description: '6x c6a.large instance (2 vCpu, 4 GB) for 4 x web service + 4 x worker service'
        },
        Postgres: { cost: 229, description: '2x Postgres db.m6g.large instance (2 vCpu, 8 GB)' },
        Redis: { cost: 107, description: 'Redis cache.m6g.large instance (2 vCpu, 6.4 GB)' },
        'Load balancing': {
          cost: 3,
          description: '6x API Gateway + Cloudmap for 6 web services + $1 per million requests'
        },
        'Public IPs': { cost: 21, description: '6 x Public IP for instance' },
        'Service fee': { cost: 207.15, description: 'Stacktape flexible tier 30%' }
      }
    },
    Heroku: {
      items: {
        Compute: {
          cost: 1500,
          description: '6x Performance M dyno (12 x compute, 2.5 GB) for 4 x web service + 2 x worker service'
        },
        Postgres: { cost: 400, description: '2 x Standard Heroku Postgres' },
        Redis: { cost: 750, description: 'Heroku Premium 7 Redis' }
      }
    },
    Fly: {
      items: {
        Compute: {
          cost: 372,
          description: '6 x Performance-2X (2 vCpu, 4 GB) for 4 x web service + 2 x worker service'
        },
        Postgres: { cost: 170, description: '2 x Postgres Performance-2X (2 vCpu, 8 GB, 20 GB storage)' },
        Redis: { cost: 62, description: 'Redis Performance-2X (2 vCpu, 4 GB)' }
      }
    },
    Coherence: {
      items: {
        'Compute resources': {
          cost: 330.5,
          description: '6x c6a.large instance (2 vCpu, 4 GB) for 4 x web service + 2 x worker service'
        },
        NAT: { cost: 64, description: '2x Network Address Translator' },
        Postgres: {
          cost: 229,
          description: '2x Postgres db.m6g.large instance (2 vCpu, 8 GB)'
        },
        Redis: {
          cost: 107,
          description: 'Redis cache.m6g.large instance (2 vCpu, 6.4 GB)'
        },
        'Load Balancing': {
          cost: 68,
          description: '4 x Load Balancer (4 x web service) + $0.008 per LCU-hour (LCU depends on amount of traffic)'
        },
        'Public IPs': { cost: 28, description: '8 x Public IPs of load balancers' },
        'Service Fee': { cost: 495, description: 'Growth plan with 5 seats' }
      }
    },
    Vercel: {
      items: null
    }
  }
};

export const infrastructureSizeDescriptions: { [size in ComparableInfrastructureSize]: ReactNode } = {
  Small: (
    <ul>
      <li>
        <b>Web service</b> with ~(2vCPUs and 4GB RAM)
      </li>
    </ul>
  ),
  Medium: (
    <ul>
      <li>
        2x <b>Web service</b> with ~(2vCPUs and 4GB RAM)
      </li>
      <li>
        <b>Postgres database</b> with ~(2vCPUs and 8GB RAM)
      </li>
    </ul>
  ),
  Large: (
    <ul>
      <li>
        4x <b>Web service</b> with ~(2vCPUs and 4GB RAM)
      </li>
      <li>
        2x <b>Private service</b> with ~(2vCPUs and 4GB RAM)
      </li>
      <li>
        <b>Postgres database</b> with ~(2vCPUs and 8GB RAM)
      </li>
      <li>
        <b>Redis</b> with ~(2vCPUs and 4-6GB RAM)
      </li>
    </ul>
  )
} as const;

export const providers: { [provider in ComparableProvider]: { icon: string; link: string } } = {
  Heroku: { icon: HerokuIcon, link: 'heroku.com' },
  Stacktape: { icon: StacktapeIcon, link: 'stacktape.com' },
  Render: { icon: RenderIcon, link: 'render.com' },
  Vercel: { icon: VercelIcon, link: 'vercel.com' },
  Fly: { icon: FlyIoIcon, link: 'fly.io' },
  Railway: { icon: RailwayIcon, link: 'railway.app' },
  Flightcontrol: { icon: FlightcontrolIcon, link: 'flightcontrol.dev' },
  Porter: { icon: PorterIcon, link: 'porter.run' },
  Coherence: { icon: CoherenceIcon, link: 'withcoherence.com' }
};

export const featureGroups = [
  {
    title: 'Hosting location',
    icon: BiGlobe,
    features: deploymentLocationFeatures
  },
  {
    title: 'Deployment options',
    icon: BiCloudUpload,
    features: deploymentOptionsFeatures
  },
  {
    title: 'Configuration',
    icon: GrDocumentConfig,
    features: configurationFeatures
  },
  {
    title: 'Compute resources',
    icon: HiOutlineServerStack,
    features: supportedComputeResourcesFeatures
  },
  {
    title: 'Database resources',
    icon: HiOutlineDatabase,
    features: supportedDatabaseResourcesFeatures
  },
  {
    title: 'Other resources',
    icon: BiArchive,
    features: otherSupportedResourcesFeatures
  },
  {
    title: 'Frontend resources',
    icon: TbUserScreen,
    features: frontendFeatures
  },
  {
    title: 'Security',
    icon: BiCheckShield,
    features: securityFeatures
  }
];
