export const BoxCardsStyles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  topRow: {
    height: "15vh",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
  },
  icon: {
    height: "10vh",
    width: "10vh",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.background.card,
  },
  bottomRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  green: {
    color: theme.palette.text.green,
    fontSize: "1.5rem",
  },
  red: {
    color: theme.palette.text.red,
    fontSize: "1.5rem",
  },
});
