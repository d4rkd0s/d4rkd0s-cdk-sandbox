#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { d4rkd0sCDKStack } from '../lib/d4rkd0s-cdk-stack';

const app = new cdk.App();
new d4rkd0sCDKStack(app, 'd4rkd0sCDKStack');
