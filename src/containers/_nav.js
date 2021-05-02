import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Theme']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Colors',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Typography',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Breadcrumb',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Collapse',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Jumbotron',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'List group',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navbars',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pagination',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Popovers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Progress',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Switches',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tabs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tooltips',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Brand buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons groups',
     
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Free',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Flags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Brands',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Badges',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modal',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Toaster',
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 500',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Disabled',
    icon: 'cil-ban',
    badge: {
      color: 'secondary',
      text: 'NEW',
    },
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Labels']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label danger',
    icon: {
      name: 'cil-star',
      className: 'text-danger'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label info',
    icon: {
      name: 'cil-star',
      className: 'text-info'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label warning',
    icon: {
      name: 'cil-star',
      className: 'text-warning'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
