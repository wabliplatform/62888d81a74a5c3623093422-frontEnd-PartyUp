/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Party from '../model/Party';

/**
* Party service.
* @module api/PartyApi
* @version 1.0.0
*/
export default class PartyApi {

    /**
    * Constructs a new PartyApi. 
    * @alias module:api/PartyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createparty operation.
     * @callback module:api/PartyApi~createpartyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Party} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Party} party data to be created
     * @param {module:api/PartyApi~createpartyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Party}
     */
    createparty(party, callback) {
      let postBody = party;
      // verify the required parameter 'party' is set
      if (party === undefined || party === null) {
        throw new Error("Missing the required parameter 'party' when calling createparty");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Party;
      return this.apiClient.callApi(
        '/party', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteparty operation.
     * @callback module:api/PartyApi~deletepartyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} partyId the Id parameter
     * @param {module:api/PartyApi~deletepartyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteparty(partyId, callback) {
      let postBody = null;
      // verify the required parameter 'partyId' is set
      if (partyId === undefined || partyId === null) {
        throw new Error("Missing the required parameter 'partyId' when calling deleteparty");
      }

      let pathParams = {
        'partyId': partyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/party/{partyId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllparty operation.
     * @callback module:api/PartyApi~getAllpartyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Party>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/PartyApi~getAllpartyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Party>}
     */
    getAllparty(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Party];
      return this.apiClient.callApi(
        '/party/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getparty operation.
     * @callback module:api/PartyApi~getpartyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Party} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} partyId the Id parameter
     * @param {module:api/PartyApi~getpartyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Party}
     */
    getparty(partyId, callback) {
      let postBody = null;
      // verify the required parameter 'partyId' is set
      if (partyId === undefined || partyId === null) {
        throw new Error("Missing the required parameter 'partyId' when calling getparty");
      }

      let pathParams = {
        'partyId': partyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Party;
      return this.apiClient.callApi(
        '/party/{partyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateparty operation.
     * @callback module:api/PartyApi~updatepartyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Party} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} partyId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Party} opts.party data to be updated
     * @param {module:api/PartyApi~updatepartyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Party}
     */
    updateparty(partyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['party'];
      // verify the required parameter 'partyId' is set
      if (partyId === undefined || partyId === null) {
        throw new Error("Missing the required parameter 'partyId' when calling updateparty");
      }

      let pathParams = {
        'partyId': partyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Party;
      return this.apiClient.callApi(
        '/party/{partyId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
