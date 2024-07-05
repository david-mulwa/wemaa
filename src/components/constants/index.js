import {IconPhoneFilled, IconTruckDelivery, IconLocationFilled, IconCherryFilled, IconUsers,IconWorld, IconDesk, IconMail} from '@tabler/icons-react'

import Kenpoly from '../../../public/kenpoly.png'
import plastico from '../../../public/downl.png'
import download from '../../../public/download.jpg'
import lorry from '../../../public/lorry.jpg'
import clearing from '../../../public/clearing-andforwarding.jpg'


export const services=[
    {
        id:'0',
        name:'Courier Services',
        description:'Whether you’re sending across town or across the country, Wema parcels is here to serve you. Wema offers delivery to the door to virtually every address in Kenya',
        direction:'ltr',
        imageUrl:lorry,
    },
    {
        id:'1',
        name:'Clearing and Forwarding',
        description:'We have been progressively consolidating our Customs clearance services in the general cargo business space',
        direction:'rtl',
        imageUrl:clearing,
    },
    {
        id:'2',
        name:'Parcel Carrier',
        description:'In a world of increasingly demanding schedules, you need a partner who will help you achieve your goals. A partner who understands your needs and provides you with efficient, reliable end to end logistical solutions that help you expand your business',
        direction:'ltr',
        imageUrl:download,
    },
]

export const home=[
    {
        id:'0',       
        title:'CALL CENTER',
        descr:'+25477616578             +254776166153',
        icon:(<IconPhoneFilled/>),
    },
    {
        id:'1',
        title:'WORKING HOURS',
        descr:'Mon-Sat: 6AM-6PM          Sunday: 9AM-3PM',
        icon:(<IconDesk/>),
    },
    {
        id:'2',
        title:'OUR LOCATION',
        descr:'we are located at Enterprise rd, next to EASYCOUCH opposite EquityBank',
        icon:(<IconLocationFilled/>),
    },
    {
        id:'3',
        title:'HEAD OFFICE',
        descr:'Enterprise road Nairobi  Sabasaba road Mombasa Kenya',
        icon:(<IconWorld/>),
    },
]

export const about=[
    {
        id:'0',
        name:'CALL CENTER',
        description:'we specialize in providing fast, secure, and efficient courier solutions tailored to meet your needs. Whether you’re a business requiring regular deliveries or an individual needing a one-time shipment, we’ve got you covered.Don’t let logistics slow you down. Trust Wema Parcels to deliver your packages swiftly and safely. We look forward to serving you and ensuring your deliveries are always on track. Contact us now and experience the difference of a dedicated courier service!',
        iconURL:(<IconPhoneFilled/>),
        
    },
    {
        id:'1',
        name:'PROTECTION POLICY',
        description:'We are committed to observing the highest environmental health and safety standards and all our dealings in transport are carried out according to the law. Our employees are provided with appropriate personal protective equipment during work sessions for safety purposes. Moreover there is an insurance cover for the goods during transit as well as for the driver and the truck collectively.',
        iconURL:(<IconCherryFilled/>),
        
    },
    {
        id:'2',
        name:'OUR MISSION',
        description:'We are committed to achieve sustainable growth to the benefit of our stakeholders by providing a comprehensive range of efficient quality transport services to areas we operate and by fostering mutually beneficial relationships with all our customers. We are also committed to providing the best services at affordable rates.',
        iconURL:(<IconTruckDelivery/>),
        
    },
    
    {
        id:'3',
        name:'CLIENTELE',
        description:'Our Clientele include but not limited to individual contractors and customers. We also target mainly organizations, companies and entities wishing to outsource transport functions.',
        iconURL:(<IconUsers/>),
        
    },
    
    {
        id:'4',
        name:'LOCATION',
        description:'Wema Parcel Service Limited has its head office in Nairobi, Enterprise Road- Next to Easy Coach, Opposite Equity Bank. The company has another office in Mombasa located at SabaSaba Road near Vipingo Butchery, to improve service delivery.',
        iconURL:(<IconLocationFilled/>),
        
    },
    
]

export const partners=[
    {
        id:'0',
        imgurl:Kenpoly,
        name:'kenpoly',
    },
    {
        id:'1',
        imgurl:plastico,
        name:'plastico',
    },
    


]

export const prog=[
    {
        id:'0',
        name:'REGION MARKET SHARE',
        value:'90',
    },
    {
        id:'1',
        name:'REVENUE GROWTH PER YEAR',
        value:'80',
    },
    {
        id:'2',
        name:'PROFIT GROWTH PER YEAR',
        value:'75',
    },
    {
        id:'3',
        name:'NUMBER OF LOGISTICS CENTERS',
        value:'90',
    },
]

export const contact=[
    {
        id:'0',
        title:'OUR LOCATIONS',
        details:'Wema Parcel Service Limited has its head office in Nairobi, Enterprise Road- Next to Easy Coach, Opposite Equity Bank. The company has another office in Mombasa located at SabaSaba Road near Vipingo Butchery, to improve service delivery.',
        icon:(<IconLocationFilled/>)
    },
    {
        id:'1',
        title:'GET IN TOUCH',
        details:'Send us an email:wemaparcelservicesltd@gmail.com',
        icon:(<IconMail/>)
    },
    {
        id:'2',
        title:'HOTLINE 24/7',
        details:'Give us a call: +254776165784 +254776166153',
        icon:(<IconPhoneFilled/>)
    },
]