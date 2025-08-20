import { api } from '@airtasker/spot';

import './polls-be/src/endpoints/HealthProbe';
import './polls-be/src/endpoints/LivenessProbe';
import './polls-be/src/endpoints/ReadinessProbe';
import './polls-be/src/endpoints/RootHealthProbe';

import './polls-be/src/endpoints/CreatePoll';
import './polls-be/src/endpoints/UpdatePoll';
import './polls-be/src/endpoints/DeletePoll';
import './polls-be/src/endpoints/UpdatePollState';
import './polls-be/src/endpoints/GetPollListing';
import './polls-be/src/endpoints/GetPollById';
import './polls-be/src/endpoints/GetPollResults';
import './polls-be/src/endpoints/GetPollResultsByOptionId';
import './polls-be/src/endpoints/GetPollCsv';

import './polls-response/src/endpoints/GetMyPollsListing';
import './polls-response/src/endpoints/GetMyPollById';
import './polls-response/src/endpoints/SubmitPollResponse';
import './polls-response/src/endpoints/UndoPollResponse';

/**
 * A REST API for the Polls Backend Service.
 */
@api({ name: 'Polls Backend API', version: '1.0' })
export class Api {}
