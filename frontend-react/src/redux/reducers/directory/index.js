const initialState = {
    current_dir: null,
    dir_key: 1,
    sider_key: null
}

export default function directory_state(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case 'SET_DIR':
            return state = {
                current_dir: payload.current_dir,
                dir_key: payload.dir_key,
                sider_key: payload.sider_key
            };
        default:
            return state;
    }
}