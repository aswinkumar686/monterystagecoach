import { useEffect, useState } from "react";

import { FaConciergeBell } from "react-icons/fa";

import Fab from "@material-ui/core/Fab";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 200,
      position: "relative",
      minHeight: 200,
      zIndex: 1000,
    },
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 1000,
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[600],
      },
    },
  })
);

const ScrollToTop = () => {
  const classes = useStyles();
  const theme = useTheme();
  const fab = {
    color: "inherit",
    className: clsx(classes.fab, classes.fabGreen),
    icon: <FaConciergeBell />,
    label: "Expand",
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div>
      {visible && (
        <Fab
          aria-label={fab.label}
          className={fab.className}
          onClick={scrollTop}
        >
          {fab.icon}
        </Fab>
      )}
    </div>
  );
};

export default ScrollToTop;
