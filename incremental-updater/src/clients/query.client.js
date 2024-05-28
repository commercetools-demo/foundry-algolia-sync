import { createApiRoot } from './create.client.js';

export const productQueryArgs = {
  staged: false, expand: ['productSelection', 'taxCategory', 'productType', 'categories[*]']
};

const expandPaths = [
  'productType',
  'taxCategory',
  'productSelection',
  'categories[*]',
];

export async function getProductProjectionById(productId) {
  return await createApiRoot()
    .productProjections()
    .withId({
      ID: Buffer.from(productId).toString(),
    })
    .get({ queryArgs: {staged: false, expand: expandPaths }})
    .execute()
    .then((response) => {
      return response.body;
    });
}
