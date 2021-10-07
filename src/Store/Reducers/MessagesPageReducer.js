const SET_OPEN_DIALOG = "MessagesPageReducer/SET_OPEN_DIALOG";

const initialState = {
    dialogs: [
        {
            id: 0,
            userName: "Oleg",
            messages: [
                {
                    id: 0,
                    bodyMessages: ["Non incididunt duis anim nisi eu officia est velit."],
                    date: "01.10.2021",
                    myMessages: true,
                },
                {
                    id: 1,
                    bodyMessages: [
                        "Proident veniam ut incididunt sunt deserunt laboris magna id voluptate ea amet incididunt anim.",
                    ],
                    date: "01.10.2021",
                    myMessages: false,
                },
                {
                    id: 2,
                    bodyMessages: ["Nisi aliqua aliqua labore ea incididunt sit commodo magna."],
                    date: "01.10.2021",
                    myMessages: true,
                },
                {
                    id: 3,
                    bodyMessages: ["Et qui dolor nulla cillum."],
                    date: "02.10.2021",
                    myMessages: false,
                },
                {
                    id: 4,
                    bodyMessages: ["Cillum cupidatat aliquip non duis ipsum sint."],
                    date: "02.10.2021",
                    myMessages: true,
                },
                {
                    id: 5,
                    bodyMessages: [
                        "Sit esse dolor consectetur ad excepteur labore ad aliquip nisi incididunt sunt excepteur.",
                    ],
                    date: "03.10.2021",
                    myMessages: false,
                },
                {
                    id: 6,
                    bodyMessages: [
                        "Tempor Lorem occaecat ullamco esse ea ullamco exercitation veniam aliqua.",
                    ],
                    date: "03.10.2021",
                    myMessages: true,
                },
            ],
        },
        {
            id: 1,
            userName: "Sveta",
            messages: [
                {
                    id: 0,
                    bodyMessages: ["Officia nulla est aliquip eiusmod ea do non."],
                    date: "11.09.2021",
                    myMessages: false,
                },
                {
                    id: 1,
                    bodyMessages: [
                        "Cillum nostrud consectetur laboris labore cupidatat nulla aliqua incididunt et commodo duis in est minim.",
                    ],
                    date: "11.10.2021",
                    myMessages: false,
                },
                {
                    id: 2,
                    bodyMessages: ["Esse amet reprehenderit do nostrud."],
                    date: "11.10.2021",
                    myMessages: true,
                },
                {
                    id: 3,
                    bodyMessages: [
                        "Consectetur aliquip duis quis id nulla in pariatur deserunt exercitation in.",
                    ],
                    date: "12.10.2021",
                    myMessages: false,
                },
                {
                    id: 4,
                    bodyMessages: ["Aute adipisicing sit adipisicing adipisicing officia aliquip."],
                    date: "13.10.2021",
                    myMessages: true,
                },
                {
                    id: 5,
                    bodyMessages: ["Excepteur magna eiusmod sint enim laboris id magna."],
                    date: "13.10.2021",
                    myMessages: false,
                },
                {
                    id: 6,
                    bodyMessages: ["Ullamco ad deserunt et Lorem proident proident sint quis."],
                    date: "14.10.2021",
                    myMessages: true,
                },
            ],
        },
        {
            id: 2,
            userName: "Dima",
            messages: [
                {
                    id: 0,
                    bodyMessages: [
                        "Reprehenderit sunt exercitation do mollit ea cillum veniam ea dolor veniam sint laboris aute ea.",
                    ],
                    date: "11.09.2021",
                    myMessages: true,
                },
                {
                    id: 1,
                    bodyMessages: ["Anim velit non minim laboris amet in velit officia officia."],
                    date: "11.10.2021",
                    myMessages: false,
                },
                {
                    id: 2,
                    bodyMessages: [
                        "Consequat reprehenderit nulla ut est deserunt dolor culpa sit et aliqua non occaecat.",
                    ],
                    date: "11.10.2021",
                    myMessages: true,
                },
                {
                    id: 3,
                    bodyMessages: [
                        "Aliquip sint Lorem laboris aute ipsum ea veniam ea quis commodo pariatur.",
                    ],
                    date: "12.10.2021",
                    myMessages: false,
                },
                {
                    id: 4,
                    bodyMessages: ["Ad deserunt fugiat ullamco ex et veniam."],
                    date: "13.10.2021",
                    myMessages: true,
                },
                {
                    id: 5,
                    bodyMessages: [
                        "Sit dolore do in mollit excepteur sunt tempor consectetur ut culpa.",
                    ],
                    date: "13.10.2021",
                    myMessages: false,
                },
                {
                    id: 6,
                    bodyMessages: [
                        "Amet proident duis sunt aute qui sit amet aliquip nulla eiusmod fugiat.",
                    ],
                    date: "14.10.2021",
                    myMessages: true,
                },
                {
                    id: 7,
                    bodyMessages: [
                        "Deserunt irure nostrud enim proident proident aute non nostrud.",
                    ],
                    date: "14.10.2021",
                    myMessages: false,
                },
                {
                    id: 8,
                    bodyMessages: ["Labore dolore deserunt ea ex est reprehenderit."],
                    date: "14.10.2021",
                    myMessages: false,
                },
                {
                    id: 9,
                    bodyMessages: ["Proident quis enim id do magna."],
                    date: "14.10.2021",
                    myMessages: true,
                },
                {
                    id: 10,
                    bodyMessages: ["Dolore dolore voluptate mollit irure amet in nulla."],
                    date: "14.10.2021",
                    myMessages: false,
                },
                {
                    id: 11,
                    bodyMessages: ["Non cillum excepteur irure duis consectetur esse laboris."],
                    date: "14.10.2021",
                    myMessages: true,
                },
                {
                    id: 12,
                    bodyMessages: [
                        "Voluptate quis sint fugiat cillum commodo sit aliquip commodo commodo nulla ipsum adipisicing velit occaecat.",
                    ],
                    date: "14.10.2021",
                    myMessages: false,
                },
                {
                    id: 13,
                    bodyMessages: ["Laborum aliqua officia fugiat cupidatat."],
                    date: "14.10.2021",
                    myMessages: true,
                },
                {
                    id: 14,
                    bodyMessages: [
                        "In eu reprehenderit ex nostrud labore magna consequat aute incididunt.",
                    ],
                    date: "14.10.2021",
                    myMessages: false,
                },
                {
                    id: 15,
                    bodyMessages: ["Cupidatat pariatur laboris in ipsum sit esse nisi eu."],
                    date: "14.10.2021",
                    myMessages: false,
                },
            ],
        },
    ],
    openDialogId: null,
};

const MessagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPEN_DIALOG:
            return {
                ...state,
                openDialogId: action.openDialogId,
            };
        default:
            return state;
    }
};

export const setOpenDialog = (openDialogId) => {
    return { type: SET_OPEN_DIALOG, openDialogId };
};

export default MessagesPageReducer;
