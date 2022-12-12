/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Datacollectiongroupid = number;
export type Experimenttype = string;
export type Blsampleid = number;
export type Workflowid = number;
export type Comments = string;
export type Status = string;
export type Workflowtitle = string;
export type Workflowtype = string;

export interface DataCollectionGroup {
  dataCollectionGroupId: Datacollectiongroupid;
  experimentType?: Experimenttype;
  blSampleId?: Blsampleid;
  Workflow?: Workflow;
}
export interface Workflow {
  workflowId: Workflowid;
  comments?: Comments;
  status?: Status;
  workflowTitle?: Workflowtitle;
  workflowType?: Workflowtype;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withDataCollectionGroup<TBase extends Constructor>(Base: TBase) {
  return class WithDataCollectionGroup extends Base {
    dataCollectionGroupId: Datacollectiongroupid;
    experimentType?: Experimenttype;
    blSampleId?: Blsampleid;
    Workflow?: Workflow;
  }
}
export function withWorkflow<TBase extends Constructor>(Base: TBase) {
  return class WithWorkflow extends Base {
    workflowId: Workflowid;
    comments?: Comments;
    status?: Status;
    workflowTitle?: Workflowtitle;
    workflowType?: Workflowtype;
  }
}
