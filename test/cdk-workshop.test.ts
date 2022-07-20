import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as d4rkd0sCDKStack from '../lib/d4rkd0s-cdk-stack';

test('SQS Queue and SNS Topic Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new d4rkd0sCDKStack.d4rkd0sCDKStack(app, 'd4rkd0sCDKStack');
  // THEN

  const template = Template.fromStack(stack);

  // template.hasResourceProperties('AWS::SQS::Queue', {
  //   VisibilityTimeout: 300
  // });
  // template.resourceCountIs('AWS::SNS::Topic', 1);
});
