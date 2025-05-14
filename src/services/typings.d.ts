declare namespace API {
  type LoginForm = {
    /** Captcha verify code */
    captcha_code: string;
    /** Captcha verify id */
    captcha_id: string;
    /** Login password (md5 hash) */
    password: string;
    /** Login name */
    username: string;
  };

  type Menu = {
    /** Child menus */
    children?: Menu[];
    /** Code of menu (unique for each level) */
    code?: string;
    /** Create time */
    created_at?: string;
    /** Details about menu */
    description?: string;
    /** Unique ID */
    id?: string;
    /** Display name of menu */
    name?: string;
    /** Parent ID (From Menu.ID) */
    parent_id?: string;
    /** Parent path (split by .) */
    parent_path?: string;
    /** Access path of menu */
    path?: string;
    /** Properties of menu (JSON) */
    properties?: string;
    /** Resources of menu */
    resources?: MenuResource[];
    /** Sequence for sorting */
    sequence?: number;
    /** Status of menu (disabled, enabled) */
    status?: string;
    /** Type of menu (page, button) */
    type?: string;
    /** Update time */
    updated_at?: string;
    statusChecked?: boolean;
    parent_name?: string;
  };

  type PaginationParam = {
    current?: number;
    pageSize?: number;
    [key: string]: any;
  };

  type ResponseResult<T> = {
    success?: boolean;
    data?: T;
    total?: number;
    error?: ErrorResult;
  };

  type ErrorResult = {
    id?: string;
    code?: number;
    detail?: string;
    status?: string;
  };

  type TreeItem = {
    id: string;
    key: string;
    value: string;
    title: string;
    parent_id?: string;
    disabled?: boolean;
    children?: TreeItem[];
    [key: string]: any;
  };

  type filePost = {
    filepath?: string;
    url?: string;
  };
}
