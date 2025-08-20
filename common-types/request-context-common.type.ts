// Common RequestContext Types - Consolidated from polls-be and polls-response
// This file contains the shared RequestContext fields

import { PollState } from "@simpplr/polls-db-shared-npm/prisma/generated/client";

export type RequestContextBase = {
  accessibleFeaturedSites: string[];
  feHost?: string;
  initTimestamp: number;
  iat: string;
  url: string;
  reqHeaders: any;
  params: any;
  orgId: string;
  appConfig: object;
  userId: string;
  claims?: {
    isUserCampaignModerator?: string;
    hasModifyAllDataPermission?: string;
    isUserAppModerator?: string;
  };
  timezone?: string;
  language?: string;
  origin: string;
  namespacePrefix: string;
  packageName: string;
  sfInstanceName?: string;
  isAppManager: boolean;
  userRole: string;
  peopleId: string;
  canManageAllAudiences?: boolean;
  manageAudienceIds?: string[];
};
