export const respMsgs = {
    successMsg: 'SUCCESS',
    serverSuccess: 'Successful',
    serverInvalidJson: 'Invalid JSON in request body',
    healthCheck: 'Service is working fine !!',
    additionalPropsError: (propsArray: any) => `Request body contains additional properties: ${[...new Set(propsArray)].join(', ')}`,
};
