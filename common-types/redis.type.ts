// Common Redis Types - Consolidated from polls-be and polls-response
// This file contains types that are duplicated across both repositories

export type RedisConfig = {
  REDIS_CLUSTER_HOST: string;
  REDIS_PORT: string;
  REDIS_PASSWORD: string;
};
