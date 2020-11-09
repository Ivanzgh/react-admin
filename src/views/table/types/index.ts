
export interface Pagination {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize?: number) => void;
}

export interface RowSelection {
    type: "radio" | "checkbox" | undefined;
    selectedRowKeys: string[] | number[];
    onChange: (selectedRowKeys: any, selectedRows: any) => void;
}

export interface EndItem {
    id: number;
    bike_sn: string;
    battery: string;
    start_time: string;
    location: string;
}

export interface SelectedItem {
    [key: number]: {
        bike_sn: number
        distance: number
        end_time: string
        id: number
        key: number
        mobile: string
        order_sn: string
        start_time: string
        status: number
        total_fee: number
        total_time: number
        user_id: number
        user_name: string
        user_pay: number
    }
}

export interface Loading {
    spinning: boolean;
    tip: string;
    size: "large" | "small" | "default" | undefined;
}


export type Column = ({
    title: string;
    dataIndex: string;
    key: string;
    render?: undefined;
} | {
    title: string;
    dataIndex: string;
    key: string;
    render: (text: number) => JSX.Element;
} | {
    title: string;
    render: (text: string, record: string) => JSX.Element;
    dataIndex?: undefined;
    key?: undefined;
})[]


export interface OrderInfo {
    status: number;
    order_sn: string;
    bike_sn: string;
    mode: number;
    start_location: string;
    end_location: string;
    city_id: number;
    mobile: string;
    user_name: string;
    distance: number;
    bike_gps: string;
    start_time: number;
    end_time: number;
    total_time: number;
    position_list: {
        lon: number;
        lat: number;
    }[];
    area: {
        lon: number;
        lat: number;
        ts: null;
    }[];
    area_list: null;
    npl_list: {
        id: string;
        name: number;
        city_id: string;
        type: string;
        status: string;
        map_point: string;
        map_point_array: string[];
        map_status: number;
        creator_name: string;
        create_time: number;
    }[]
}