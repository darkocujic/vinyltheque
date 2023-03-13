export interface DiscogsPagination {
  page?: number;
  perPage?: number;
  pages?: number;
  items?: number;
  urls?: {
    first?: string;
    prev?: string;
    last?: string;
    next?: string;
  };
}
