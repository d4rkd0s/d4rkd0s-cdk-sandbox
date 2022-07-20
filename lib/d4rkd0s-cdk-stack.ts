import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

// import { SelfDestruct } from 'cdk-time-bomb';

export class d4rkd0sCDKStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    // apig

    //// My cool lil lambda function
    const helloLambda = new lambda.Function(this, 'HelloLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('myLambda'),
      handler: 'aLambda.aHandler',
    });

    // defines an API Gateway REST API resource backed by our "hello" function.
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: helloLambda
    });

    // const selfDestruct = new SelfDestruct(this, "selfDestructor", {
    //   timeToLive: Duration.minutes(1)
    // });
    
    //// SQS, SNS, and Subscriptions
    // const queue = new sqs.Queue(this, 'CdkWorkshopQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
    // const topic = new sns.Topic(this, 'CdkWorkshopTopic');
    // topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
