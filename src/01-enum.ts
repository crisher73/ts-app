enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
}

type User = {
    username: string;
    role: ROLES;
}

const crisUser: User = {
    username: 'crisher73',
    role: ROLES.ADMIN

}

