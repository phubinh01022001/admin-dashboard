export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 22,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
        },
    },
];

export const userRows = [
    {
        id: 1,
        username: 'Binh',
        img: 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/327998638_1323200561870140_3302435434892892694_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NNfhMlcg9F4AX8C5vfp&tn=LFBQwRp_mRsk0Yoy&_nc_ht=scontent.fsgn8-1.fna&oh=00_AfANjBugb36HObYvOO8SvN7Q6qFLo33XVLtD1ollXAyCZQ&oe=63DEB61D',
        status: 'active',
        email: 'phubinh@gmail.com',
        age: 22,
    },
    {
        id: 2,
        username: 'Giang',
        img: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/292098591_1766308383717458_5057285401490596734_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=WynNevGHeBYAX_ooiQ8&_nc_oc=AQmWcMMJwvGsiLgQqqQgqASGIFF9AefEoBU_Kbz2dLOAnc3VI6GyNAHSGDqqFk7LlTQ&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfDGlFMEDSieakVtGjnJimQmorCODwH9W22yQcxv06KvxQ&oe=63DF9B9B',
        status: 'passive',
        email: 'camgiang@gmail.com',
        age: 20,
    },
    {
        id: 3,
        username: 'Linh',
        img: 'https://scontent.fsgn13-1.fna.fbcdn.net/v/t39.30808-6/311815224_2168934853301912_3742346794752332330_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=np7kQ66Ja0IAX-5sucr&_nc_ht=scontent.fsgn13-1.fna&oh=00_AfA9eJxdKKwa5LHKWwqy1jXJ_oIuuMuPciA-dwbNtwlhOA&oe=63DF3D91',
        status: 'pending',
        email: 'camlinh@gmail.com',
        age: 18,
    },
    {
        id: 4,
        username: 'Phuoc',
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/326237524_2501856853324053_153546718398171789_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-jeXse3nW8YAX-t17ls&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfBcnCn1O8XwF5s8S9zlATeYyVUjP3AXIPO63Fupdr4pHA&oe=63DF8C3C',
        status: 'active',
        email: 'giaphuoc@gmail.com',
        age: 29,
    },
    {
        id: 5,
        username: 'Ngoc',
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/327961903_3204232003201514_8939025755196797967_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0LjSlgkmsNgAX94sqca&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCoiaWcEcm_s6pmZm5vC4cBZ82ai-jfUpS361KFU-Wp8w&oe=63DE53FA',
        status: 'passive',
        email: 'mongngoc@gmail.com',
        age: 30,
    },
    {
        id: 6,
        username: 'Phong',
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/327961903_3204232003201514_8939025755196797967_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0LjSlgkmsNgAX94sqca&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCoiaWcEcm_s6pmZm5vC4cBZ82ai-jfUpS361KFU-Wp8w&oe=63DE53FA',
        status: 'passive',
        email: 'mongngoc@gmail.com',
        age: 30,
    },
    {
        id: 7,
        username: 'Yen',
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/327961903_3204232003201514_8939025755196797967_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0LjSlgkmsNgAX94sqca&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCoiaWcEcm_s6pmZm5vC4cBZ82ai-jfUpS361KFU-Wp8w&oe=63DE53FA',
        status: 'passive',
        email: 'mongngoc@gmail.com',
        age: 30,
    },
    {
        id: 8,
        username: 'Ngan',
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/327961903_3204232003201514_8939025755196797967_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0LjSlgkmsNgAX94sqca&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCoiaWcEcm_s6pmZm5vC4cBZ82ai-jfUpS361KFU-Wp8w&oe=63DE53FA',
        status: 'passive',
        email: 'mongngoc@gmail.com',
        age: 30,
    },
    {
        id: 9,
        username: 'Tran',
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/327961903_3204232003201514_8939025755196797967_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0LjSlgkmsNgAX94sqca&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCoiaWcEcm_s6pmZm5vC4cBZ82ai-jfUpS361KFU-Wp8w&oe=63DE53FA',
        status: 'passive',
        email: 'mongngoc@gmail.com',
        age: 30,
    },
    {
        id: 10,
        username: 'Quoc',
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/327961903_3204232003201514_8939025755196797967_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0LjSlgkmsNgAX94sqca&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCoiaWcEcm_s6pmZm5vC4cBZ82ai-jfUpS361KFU-Wp8w&oe=63DE53FA',
        status: 'passive',
        email: 'mongngoc@gmail.com',
        age: 30,
    },
];
