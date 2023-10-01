import React from 'react'
import './tips.css'
import Feature from '../feature/Feature.jsx'
import Youtube from '../youtube/Youtube.jsx'

const featuresData = [
    {
      title: 'Trust Your Instincts',
      text: 'Always trust your gut feeling. If a situation or a person makes you uncomfortable, remove yourself from it.',
    },
    {
      title: 'Stay Aware',
      text: 'Be aware of your surroundings, especially in unfamiliar or isolated areas. Avoid distractions like headphones when walking alone.',
    },
    {
      title: 'Plan Your Routes',
      text: ' Inform someone you trust about your whereabouts and planned routes when going out alone, especially during nighttime.',
    },
    {
      title: 'Use Well-Lit Paths',
      text: 'Stick to well-lit streets and avoid shortcuts through dark alleys or poorly lit areas',
    },
    {
        title: 'Carry Essentials',
        text: 'Carry a fully charged phone, a personal alarm, and a small self-defense tool (like pepper spray) with you.',
      },
      {
        title: 'Learn Self-Defense',
        text: 'Consider taking self-defense classes to build confidence and learn techniques for personal safety.',
      },
      {
        title: 'Buddy System',
        text: "Whenever possible, go out with a friend or in a group. There's safety in numbers.",
      },
  ];

const featuresData2 = [
    {
      title: 'Protect Personal Information',
      text: 'Be cautious about sharing personal information online. Avoid sharing your exact location, address, phone number, or financial details.',
    },
    {
      title: 'Strong Passwords',
      text: 'Use strong, unique passwords for your online accounts. Consider using a password manager for added security.',
    },
    {
      title: 'Privacy Settings',
      text: 'Adjust your privacy settings on social media to control who can see your posts and personal information',
    },
    {
      title: 'Beware of Scams',
      text: 'Be skeptical of unsolicited messages or emails, especially those asking for money or personal details.',
    },
    {
        title: 'Secure Wi-Fi',
        text: 'Ensure your Wi-Fi connection is secure, and use a virtual private network (VPN) when accessing public Wi-Fi networks.',
      },
      {
        title: 'Think Before You Click',
        text: 'Avoid clicking on suspicious links or downloading attachments from unknown sources.',
      },
  ];
  const featuresData3 = [
    {
      title: 'Research Destinations',
      text: ' Before traveling, research your destination, including local customs, laws, and potential safety concerns.',
    },
    {
      title: 'Share Itinerary',
      text: 'Share your travel itinerary with a trusted friend or family member. Check in with them regularly.',
    },
    {
      title: 'Secure Accommodations',
      text: 'Choose reputable accommodations in safe neighborhoods. Lock doors and windows when inside.',
    },
    {
      title: 'Keep Valuables Secure',
      text: 'Use hotel safes for passports, money, and valuables. Carry a copy of important documents.',
    },
    {
        title: 'Stay Alert',
        text:  'Pay attention to your surroundings, and avoid excessive alcohol consumption when in unfamiliar places.',
      },
      {
        title: 'Use Reliable Transportation',
        text: 'Use reputable transportation services, and avoid getting into unmarked or unregistered vehicles.',
      },
  ];
  const featuresData4 = [
    {
      title: 'Secure Entry Points',
      text: ' Install sturdy locks on doors and windows. Consider a peephole for added security.',
    },
    {
      title: 'Outdoor Lighting',
      text: 'Well-lit entrances and outdoor areas can deter potential intruders.',
    },
    {
      title: 'Emergency Contacts',
      text: 'Keep a list of emergency contacts, including local authorities and neighbors.',
    },
    {
      title: 'Safety Alarms',
      text: ' Install smoke detectors, carbon monoxide detectors, and a security system if possible.',
    },
    {
        title: "Don't Share Home Plans",
        text:  'Avoid sharing your travel plans or daily routines with strangers or on social media.',
      },
      {
        title: 'Trust Your Instincts',
        text: 
        "If you sense something is amiss, don't hesitate to call the police or a trusted neighbor.",
      },
  ];
  const featuresData5 = [
    {
      title: 'Be Aware of Your Surroundingss',
      text: ' Always be mindful of your environment. Know the locations of emergency exits, fire extinguishers, and first aid kits.',
    },
    {
      title: 'Secure Personal Belongings',
      text: 'Keep your purse, phone, and other personal belongings secure and within sight to prevent theft.',
    },
    {
      title: 'Self-Defense Training',
      text: 'Consider taking self-defense classes to empower yourself with techniques that can help in case of an emergency.',
    },
    {
      title: 'Safe Parking',
      text: 'Park your car in well-lit areas. If possible, park close to the entrance or security cameras.',
    },
    {
        title: "Anti-Harassment Policy",
        text:  'Familiarize yourself with the company’s anti-harassment policy. Report any inappropriate behavior promptly.',
      },
     
  ];
const Tips = () => {
  return (
    <>
    <div className="ws__features section__padding" id="features">
    <div className="ws__features-heading">
      <h1 className="gradient__text">Personal Safety Tips</h1>

    </div>
    <div className="ws__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  <div className="ws__features section__padding" id="features">
    <div className="ws__features-heading">
      <h1 className="gradient__text">Online Safety Tips</h1>

    </div>
    <div className="ws__features-container">
      {featuresData2.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  <div className="ws__features section__padding" id="features">
    <div className="ws__features-heading">
      <h1 className="gradient__text">Travel Safety Tips</h1>

    </div>
    <div className="ws__features-container">
      {featuresData3.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  <div className="ws__features section__padding" id="features">
    <div className="ws__features-heading">
      <h1 className="gradient__text">Home Safety Tips</h1>

    </div>
    <div className="ws__features-container">
      {featuresData5.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  <div className="ws__features section__padding" id="features">
    <div className="ws__features-heading">
      <h1 className="gradient__text">Workspace Safety Tips</h1>

    </div>
    <div className="ws__features-container">
      {featuresData5.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  <Youtube/>
  </>
  )
  
}

export default Tips
