// @generated
/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PipelineRunStatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: AssetQuery
// ====================================================

export interface AssetQuery_assetOrError_AssetsNotSupportedError {
  __typename: "AssetsNotSupportedError";
}

export interface AssetQuery_assetOrError_Asset_assetMaterializations_runOrError_PipelineRunNotFoundError {
  __typename: "PipelineRunNotFoundError" | "PythonError";
}

export interface AssetQuery_assetOrError_Asset_assetMaterializations_runOrError_PipelineRun_pipeline {
  __typename: "Pipeline" | "UnknownPipeline";
  name: string;
}

export interface AssetQuery_assetOrError_Asset_assetMaterializations_runOrError_PipelineRun {
  __typename: "PipelineRun";
  runId: string;
  status: PipelineRunStatus;
  pipeline: AssetQuery_assetOrError_Asset_assetMaterializations_runOrError_PipelineRun_pipeline;
}

export type AssetQuery_assetOrError_Asset_assetMaterializations_runOrError = AssetQuery_assetOrError_Asset_assetMaterializations_runOrError_PipelineRunNotFoundError | AssetQuery_assetOrError_Asset_assetMaterializations_runOrError_PipelineRun;

export interface AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export type AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries = AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventPathMetadataEntry | AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventJsonMetadataEntry | AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventUrlMetadataEntry | AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventTextMetadataEntry | AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventMarkdownMetadataEntry | AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries_EventPythonArtifactMetadataEntry;

export interface AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization {
  __typename: "Materialization";
  label: string;
  description: string | null;
  metadataEntries: AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization_metadataEntries[];
}

export interface AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent {
  __typename: "StepMaterializationEvent";
  runId: string;
  timestamp: string;
  materialization: AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent_materialization;
}

export interface AssetQuery_assetOrError_Asset_assetMaterializations {
  __typename: "AssetMaterialization";
  runOrError: AssetQuery_assetOrError_Asset_assetMaterializations_runOrError;
  materializationEvent: AssetQuery_assetOrError_Asset_assetMaterializations_materializationEvent;
}

export interface AssetQuery_assetOrError_Asset {
  __typename: "Asset";
  key: string;
  assetMaterializations: AssetQuery_assetOrError_Asset_assetMaterializations[];
}

export type AssetQuery_assetOrError = AssetQuery_assetOrError_AssetsNotSupportedError | AssetQuery_assetOrError_Asset;

export interface AssetQuery {
  assetOrError: AssetQuery_assetOrError;
}

export interface AssetQueryVariables {
  assetKey: string;
}
