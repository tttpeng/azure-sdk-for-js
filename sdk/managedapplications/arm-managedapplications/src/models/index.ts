/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Plan for the appliance.
 */
export interface Plan {
  /**
   * The plan name.
   */
  name: string;
  /**
   * The publisher ID.
   */
  publisher: string;
  /**
   * The product code.
   */
  product: string;
  /**
   * The promotion code.
   */
  promotionCode?: string;
  /**
   * The plan's version.
   */
  version: string;
}

/**
 * Resource information.
 */
export interface Resource extends BaseResource {
  /**
   * Resource ID
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Resource name
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Resource location
   */
  location?: string;
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Resource information.
 */
export interface GenericResource extends Resource {
  /**
   * ID of the resource that manages this resource.
   */
  managedBy?: string;
  /**
   * The SKU of the resource.
   */
  sku?: Sku;
  /**
   * The identity of the resource.
   */
  identity?: Identity;
}

/**
 * Information about appliance.
 */
export interface Appliance extends GenericResource {
  /**
   * The managed resource group Id.
   */
  managedResourceGroupId: string;
  /**
   * The fully qualified path of appliance definition Id.
   */
  applianceDefinitionId?: string;
  /**
   * Name and value pairs that define the appliance parameters. It can be a JObject or a well
   * formed JSON string.
   */
  parameters?: any;
  /**
   * Name and value pairs that define the appliance outputs.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly outputs?: any;
  /**
   * The appliance provisioning state. Possible values include: 'Accepted', 'Running', 'Ready',
   * 'Creating', 'Created', 'Deleting', 'Deleted', 'Canceled', 'Failed', 'Succeeded', 'Updating'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The blob URI where the UI definition file is located.
   */
  uiDefinitionUri?: string;
  /**
   * The plan information.
   */
  plan?: Plan;
  /**
   * The kind of the appliance. Allowed values are MarketPlace and ServiceCatalog.
   */
  kind?: string;
}

/**
 * Plan for the appliance.
 */
export interface PlanPatchable {
  /**
   * The plan name.
   */
  name?: string;
  /**
   * The publisher ID.
   */
  publisher?: string;
  /**
   * The product code.
   */
  product?: string;
  /**
   * The promotion code.
   */
  promotionCode?: string;
  /**
   * The plan's version.
   */
  version?: string;
}

/**
 * Information about appliance.
 */
export interface AppliancePatchable extends GenericResource {
  /**
   * The managed resource group Id.
   */
  managedResourceGroupId?: string;
  /**
   * The fully qualified path of appliance definition Id.
   */
  applianceDefinitionId?: string;
  /**
   * Name and value pairs that define the appliance parameters. It can be a JObject or a well
   * formed JSON string.
   */
  parameters?: any;
  /**
   * Name and value pairs that define the appliance outputs.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly outputs?: any;
  /**
   * The appliance provisioning state. Possible values include: 'Accepted', 'Running', 'Ready',
   * 'Creating', 'Created', 'Deleting', 'Deleted', 'Canceled', 'Failed', 'Succeeded', 'Updating'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The blob URI where the UI definition file is located.
   */
  uiDefinitionUri?: string;
  /**
   * The plan information.
   */
  plan?: PlanPatchable;
  /**
   * The kind of the appliance. Allowed values are MarketPlace and ServiceCatalog.
   */
  kind?: string;
}

/**
 * The appliance provider authorization.
 */
export interface ApplianceProviderAuthorization {
  /**
   * The provider's principal identifier. This is the identity that the provider will use to call
   * ARM to manage the appliance resources.
   */
  principalId: string;
  /**
   * The provider's role definition identifier. This role will define all the permissions that the
   * provider must have on the appliance's container resource group. This role definition cannot
   * have permission to delete the resource group.
   */
  roleDefinitionId: string;
}

/**
 * Appliance artifact.
 */
export interface ApplianceArtifact {
  /**
   * The appliance artifact name.
   */
  name?: string;
  /**
   * The appliance artifact blob uri.
   */
  uri?: string;
  /**
   * The the appliance artifact type. Possible values include: 'Template', 'Custom'
   */
  type?: ApplianceArtifactType;
}

/**
 * Information about appliance definition.
 */
export interface ApplianceDefinition extends GenericResource {
  /**
   * The appliance lock level. Possible values include: 'CanNotDelete', 'ReadOnly', 'None'
   */
  lockLevel: ApplianceLockLevel;
  /**
   * The appliance definition display name.
   */
  displayName?: string;
  /**
   * The appliance provider authorizations.
   */
  authorizations: ApplianceProviderAuthorization[];
  /**
   * The collection of appliance artifacts. The portal will use the files specified as artifacts to
   * construct the user experience of creating an appliance from an appliance definition.
   */
  artifacts?: ApplianceArtifact[];
  /**
   * The appliance definition description.
   */
  description?: string;
  /**
   * The appliance definition package file Uri.
   */
  packageFileUri: string;
}

/**
 * SKU for the resource.
 */
export interface Sku {
  /**
   * The SKU name.
   */
  name: string;
  /**
   * The SKU tier.
   */
  tier?: string;
  /**
   * The SKU size.
   */
  size?: string;
  /**
   * The SKU family.
   */
  family?: string;
  /**
   * The SKU model.
   */
  model?: string;
  /**
   * The SKU capacity.
   */
  capacity?: number;
}

/**
 * Identity for the resource.
 */
export interface Identity {
  /**
   * The principal ID of resource identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  /**
   * The identity type. Possible values include: 'SystemAssigned'
   */
  type?: ResourceIdentityType;
}

/**
 * Error response indicates ARM appliance is not able to process the incoming request. The reason
 * is provided in the error message.
 */
export interface ErrorResponse {
  /**
   * Http status code.
   */
  httpStatus?: string;
  /**
   * Error code.
   */
  errorCode?: string;
  /**
   * Error message indicating why the operation failed.
   */
  errorMessage?: string;
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.Solutions
   */
  provider?: string;
  /**
   * Resource on which the operation is performed: Profile, endpoint, etc.
   */
  resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   */
  operation?: string;
}

/**
 * Microsoft.Solutions operation
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * Optional Parameters.
 */
export interface AppliancesUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Parameters supplied to update an existing appliance.
   */
  parameters?: Appliance;
}

/**
 * Optional Parameters.
 */
export interface AppliancesUpdateByIdOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Parameters supplied to update an existing appliance.
   */
  parameters?: Appliance;
}

/**
 * An interface representing ManagedApplicationClientOptions.
 */
export interface ManagedApplicationClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Result of the request to list Microsoft.Solutions operations. It contains a list of operations
 * and a URL link to get the next set of results.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * List of appliances.
 * @extends Array<Appliance>
 */
export interface ApplianceListResult extends Array<Appliance> {
  /**
   * The URL to use for getting the next set of results.
   */
  nextLink?: string;
}

/**
 * @interface
 * List of appliance definitions.
 * @extends Array<ApplianceDefinition>
 */
export interface ApplianceDefinitionListResult extends Array<ApplianceDefinition> {
  /**
   * The URL to use for getting the next set of results.
   */
  nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Accepted', 'Running', 'Ready', 'Creating', 'Created', 'Deleting',
 * 'Deleted', 'Canceled', 'Failed', 'Succeeded', 'Updating'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Accepted' | 'Running' | 'Ready' | 'Creating' | 'Created' | 'Deleting' | 'Deleted' | 'Canceled' | 'Failed' | 'Succeeded' | 'Updating';

/**
 * Defines values for ApplianceLockLevel.
 * Possible values include: 'CanNotDelete', 'ReadOnly', 'None'
 * @readonly
 * @enum {string}
 */
export type ApplianceLockLevel = 'CanNotDelete' | 'ReadOnly' | 'None';

/**
 * Defines values for ApplianceArtifactType.
 * Possible values include: 'Template', 'Custom'
 * @readonly
 * @enum {string}
 */
export type ApplianceArtifactType = 'Template' | 'Custom';

/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'SystemAssigned'
 * @readonly
 * @enum {string}
 */
export type ResourceIdentityType = 'SystemAssigned';

/**
 * Contains response data for the listOperations operation.
 */
export type ListOperationsResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listOperationsNext operation.
 */
export type ListOperationsNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type AppliancesGetResponse = Appliance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type AppliancesCreateOrUpdateResponse = Appliance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the update operation.
 */
export type AppliancesUpdateResponse = Appliance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type AppliancesListByResourceGroupResponse = ApplianceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceListResult;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type AppliancesListBySubscriptionResponse = ApplianceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceListResult;
    };
};

/**
 * Contains response data for the getById operation.
 */
export type AppliancesGetByIdResponse = Appliance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the createOrUpdateById operation.
 */
export type AppliancesCreateOrUpdateByIdResponse = Appliance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the updateById operation.
 */
export type AppliancesUpdateByIdResponse = Appliance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type AppliancesBeginCreateOrUpdateResponse = Appliance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the beginCreateOrUpdateById operation.
 */
export type AppliancesBeginCreateOrUpdateByIdResponse = Appliance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type AppliancesListByResourceGroupNextResponse = ApplianceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceListResult;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type AppliancesListBySubscriptionNextResponse = ApplianceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ApplianceDefinitionsGetResponse = ApplianceDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ApplianceDefinitionsCreateOrUpdateResponse = ApplianceDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ApplianceDefinitionsListByResourceGroupResponse = ApplianceDefinitionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceDefinitionListResult;
    };
};

/**
 * Contains response data for the getById operation.
 */
export type ApplianceDefinitionsGetByIdResponse = ApplianceDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the createOrUpdateById operation.
 */
export type ApplianceDefinitionsCreateOrUpdateByIdResponse = ApplianceDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type ApplianceDefinitionsBeginCreateOrUpdateResponse = ApplianceDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the beginCreateOrUpdateById operation.
 */
export type ApplianceDefinitionsBeginCreateOrUpdateByIdResponse = ApplianceDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ApplianceDefinitionsListByResourceGroupNextResponse = ApplianceDefinitionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApplianceDefinitionListResult;
    };
};
