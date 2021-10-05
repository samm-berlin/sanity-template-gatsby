import theme from "./theme"

export default {
    normal: {
        fontFamily: theme.fonts.sans,
        fontSize: 3,
        fontWeight: 300,
    },
    caption: {
        fontFamily: theme.fonts.serif,
        fontSize: 4,
        fontStyle: 'italic',
    },
    captionSmall: {
        fontFamily: theme.fonts.serif,
        fontSize: 1,
        fontStyle: 'italic',
    },
    head: {
        fontFamily: theme.fonts.sans,
        fontSize: 5,
        fontWeight: 900,
        textTransform: 'uppercase',
        my: 2
    },
    subhead: {
        fontFamily: theme.fonts.serif,
        fontSize: 4,
        fontWeight: 400,
        my: 1
    },
    body: {
        fontFamily: theme.fonts.sans,
        fontSize: 3,
        fontWeight: 300,
    }
}