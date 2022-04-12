/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.14
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { F24 } from './f24';
import { ListF24ResponseAggregatedData } from './list-f24-response-aggregated-data';
import { ListF24ResponseAggregation } from './list-f24-response-aggregation';
import { ListF24ResponsePage } from './list-f24-response-page';
import { Pagination } from './pagination';

/**
 * @type ListF24Response
 * 
 * @export
 */
export type ListF24Response = ListF24ResponseAggregation & ListF24ResponsePage & Pagination;

