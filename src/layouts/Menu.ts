import { IMAGES } from '@/constent/Them';
import { reactive } from 'vue';

interface subMenuType {
  menu?: string
  to?: string
  className?: string
  img?: string
  anchor? : true
}

interface menuType {
  title?: string
  className?: string
  to?: string
  subMenuItems?: subMenuType[]
}

const MenuItems = reactive<menuType[]>([
  {
    title: 'Home',
    className: 'mega-menu',
    subMenuItems: [
      { menu: '01 Skin Care', to: 'https://clinicmaster-skincare-vue.vercel.app/', img:IMAGES.demo3, anchor:true },
      { menu: '02 Dentist', to: '/', img:IMAGES.demo2,  },
      { menu: '03 Medical', to: 'https://clinicmaster-medical-vue.vercel.app/', img:IMAGES.demo1, anchor:true}
    ]
  },
  {
    title: 'Pages',
    className: 'sub-menu',
    subMenuItems: [
      { menu: 'About Us', to: '/about-us' },
      { menu: 'About Us 2', to: '/about-us-2' },
      { menu: 'Appointment', to: '/appointment' },
      { menu: 'Pricing Table', to: '/pricing-table' },
      { menu: 'Testimonial', to: '/testimonial' },
      { menu: `Faq's`, to: '/faqs' },
      { menu: 'Error 404', to: '/error-404' }
    ]
  },
  {
    title: 'Team',
    className: 'sub-menu',
    subMenuItems: [
      { menu: 'Team', to: '/team' },
      { menu: 'Team Detail', to: '/team-detail' }
    ]
  },
  {
    title: 'Services',
    className: 'sub-menu',
    subMenuItems: [
      { menu: 'Services', to: '/services' },
      { menu: 'Services 2', to: '/services-2' },
      { menu: 'Service Detail', to: '/service-detail' },
      { menu: 'Service Detail 2', to: '/service-detail-2' }
    ]
  },
  {
    title: 'Blogs',
    className: 'sub-menu',
    subMenuItems: [
      { menu: 'Blog Grid', to: '/blog-grid' },
      { menu: 'Blog List Sidebar', to: '/blog-list-sidebar' },
      { menu: 'Blog Details', to: '/blog-details' }
    ]
  },
  {
    title: 'Contact Us',
    to: 'contact-us',
  },
])

export default MenuItems
