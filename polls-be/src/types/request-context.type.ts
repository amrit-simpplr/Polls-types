import { PollState } from "@simpplr/polls-db-shared-npm/prisma/generated/client";

export type RequestContext = {
  accessibleFeaturedSites: string[];
  feHost?: string;
  initTimestamp: number;
  iat: string;
  url: string;
  reqHeaders: any;
  params: any;
  queryParam: {
    origin?: string;
    type?: string;
    id?: string;
    page?: string;
    pageSize?: string;
    searchTerm?: string;
    sortOrder?: "asc" | "desc";
    sites?: string[];
    createdBy?: string[];
    creator?: string;
    state?: PollState;
    themeId?: string | string[];
    questionType?: string[];
    audienceIds?: string[];
  };
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
