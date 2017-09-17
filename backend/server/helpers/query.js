import config from '../../config/config';

// Get page and limit in interger
// Default value if undefined
export function getPageLimit(query) {
  let { page, limit } = query;
  page = parseInt(page || 0);
  limit = parseInt(limit || config.defaultLimit);
  return { page, limit };
}
