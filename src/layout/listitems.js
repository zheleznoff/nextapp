import React from 'react';
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SwitchVideoIcon from '@material-ui/icons/SwitchVideo';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

export const mainListItems = (
  <>
    <Link href={'/organization'} passHref>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary={'Организация съемки'} />
      </ListItem>
    </Link>
    <Link href="/post-installation" passHref>
      <ListItem button>
        <ListItemIcon><SwitchVideoIcon/></ListItemIcon>
        <ListItemText primary={'Пост-монтаж'} />
      </ListItem>
    </Link>
    <Link href={'/editing'} passHref>
      <ListItem button>
        <ListItemIcon><QueuePlayNextIcon/></ListItemIcon>
        <ListItemText primary={'Монтаж'} />
      </ListItem>
    </Link>
    <Link href={'/product'} passHref>
      <ListItem button>
        <ListItemIcon><OndemandVideoIcon/></ListItemIcon>
        <ListItemText primary={'Продукт'} />
      </ListItem>
    </Link>
  </>
);