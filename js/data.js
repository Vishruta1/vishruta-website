/**
 * ViShruTa - Digital Technology Solutions
 * Single Source of Truth for Content (extracted directly from ViShruTa_Profile_v3_1.pdf)
 */

window.ViShruTaData = {
  company: {
    name: "ViShruTa – Digital Technology Solutions",
    brandName: "ViShruTa",
    tagline: "Smart Solutions. Stronger Industries.",
    subTagline: "Empowering Businesses with Intelligent Technology for a Smarter Tomorrow.",
    motto: "Engineering a Smarter Tomorrow",
    secondaryMotto: "Automate. Integrate. Optimize for a Smarter Tomorrow.",
    mission: "To empower industries with intelligent, reliable and secure technology solutions that drive efficiency, ensure traceability and accelerate growth.",
    vision: "From shop floor to enterprise systems, we deliver end-to-end solutions that transform the way industries operate.",
    certifications: [
      {
        title: "ISO 27001 Certified Company",
        subtitle: "Information Security Management System (ISMS)",
        description: "Certified for Information Security ensuring strict data protection, operational resilience, and enterprise compliance across all engineering deliveries."
      }
    ],
    stats: {
      experience: "50+",
      experienceLabel: "Years of Collective Experience",
      projects: "30+",
      projectsLabel: "Projects Successfully Delivered",
      clientsAbout: "15+",
      clientsAboutLabel: "Enterprise Clients",
      customersPage: "30+",
      customersPageLabel: "Happy Customers Worldwide",
      iso: "ISO 27001",
      isoLabel: "Certified for Information Security"
    },
    contactEmail: "scm.vishruta@gmail.com",
    address: {
      entity: "Vishruta Enterprises",
      street: "Malleshwaram",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560003",
      country: "India",
      website: "www.vishruta.co.in"
    }
  },

  whatWeSolve: [
    {
      id: "downtime",
      title: "Downtime",
      description: "Unexpected machine failures and unplanned stoppages lead to production losses and missed deadlines.",
      solution: "Predictive maintenance, automated interlocking, real-time alert systems and 24x7 support."
    },
    {
      id: "manual-processes",
      title: "Manual Processes",
      description: "Time-consuming manual tasks increase errors, reduce efficiency and limit scalability.",
      solution: "Full shop-floor digitalization, automated DC tool controls, and automated reporting."
    },
    {
      id: "poor-traceability",
      title: "Poor Traceability",
      description: "Lack of real-time visibility across the supply chain makes tracking, recalls and compliance difficult.",
      solution: "Farm-to-fork and component-level serialization with QR, RFID, and cloud dashboards."
    },
    {
      id: "security",
      title: "Security",
      description: "Unauthorized access, data breaches and system vulnerabilities put critical operations at risk.",
      solution: "ISO 27001 certified architecture, OTP-based authorization gates, and encrypted audit trails."
    },
    {
      id: "quality",
      title: "Quality",
      description: "Inconsistent quality, defects and rework lead to higher costs and dissatisfied customers.",
      solution: "Vision AI inspection, automated torque/angle validation, and instant NOK line stoppage."
    }
  ],

  pillars: {
    software: {
      number: "01",
      title: "Software Solutions",
      subtitle: "Intelligent software solutions for visibility, traceability and smarter decision-making.",
      items: [
        "PLC / HMI / SCADA Software",
        "MES Integration & Traceability",
        "Industrial Software Solutions",
        "Data Analytics & Smart Factory"
      ]
    },
    controlInstrumentation: {
      number: "02",
      title: "Control & Instrumentation",
      subtitle: "Reliable control systems and precision instrumentation for efficient operations.",
      items: [
        "PLC & Control Systems",
        "HMI & SCADA",
        "Field Instrumentation",
        "Control Panels & I/O Systems"
      ]
    }
  },

  coreSolutions: [
    {
      number: "01",
      title: "Industrial IoT",
      desc: "Connect machines, devices and sensors to monitor, analyze and optimize operations in real time."
    },
    {
      number: "02",
      title: "Vision AI",
      desc: "AI-powered vision systems for inspection, detection, classification and quality assurance with high accuracy."
    },
    {
      number: "03",
      title: "Data Acquisition",
      desc: "Reliable and scalable data acquisition systems to collect, process and store critical data from multiple sources."
    },
    {
      number: "04",
      title: "Automation",
      desc: "End-to-end automation solutions to improve productivity, reduce errors and enhance operational efficiency."
    },
    {
      number: "05",
      title: "RFID Solutions",
      desc: "Advanced RFID solutions for tracking, identification and real-time visibility across the value chain."
    },
    {
      number: "06",
      title: "Firmware Flashing",
      desc: "Secure and reliable firmware flashing solutions for ECUs, controllers and embedded devices at scale."
    }
  ],

  products: [
    {
      slug: "setu",
      name: "SETU",
      tagline: "Secured Unified Tracking Portal",
      accent: "#1E90FF",
      shortDesc: "Software platform for secure monitoring, OTP-based control, email alerts and real-time activity logging.",
      objective: "To provide secure, real-time monitoring of desktop activity with OTP-based control and email alerts, ensuring restricted access, tamper-proof supervision, and audit-ready logs.",
      features: [
        {
          title: "Prevent Unauthorized Usage",
          desc: "Blocks specific UI elements or actions based on pre-configured images or buttons."
        },
        {
          title: "OTP-based Supervision Control",
          desc: "Generates and verifies OTPs before allowing monitoring to stop."
        },
        {
          title: "Email Notifications for Every Event",
          desc: "Sends OTP, employee info, timestamp, and reason to registered recipients instantly."
        },
        {
          title: "Real-time Activity Logging",
          desc: "Local log file records all OTP attempts and monitoring actions; exportable to Excel."
        }
      ],
      idealFor: [
        "Manufacturing Units",
        "Industrial Offices",
        "Secure Supervision",
        "Authorized Access Control",
        "Audit & Compliance Management"
      ],
      workflowSteps: [
        { step: 1, title: "Monitoring in Progress", desc: "Monitors user activity and blocks pre-configured functions" },
        { step: 2, title: "User Initiates Stop Monitoring", desc: "Prompts selection of Admin or Supervision Mode" },
        { step: 3, title: "System Generates OTP", desc: "Issues dynamic QR code or OTP passcode" },
        { step: 4, title: "Authorized User Enters OTP & ID", desc: "Validates credentials against access matrix" },
        { step: 5, title: "Monitoring Stops & Log Saved", desc: "Audit logs are written locally and stamped" },
        { step: 6, title: "Email Alert Sent Instantly", desc: "Notifies designated managers in real time" }
      ]
    },
    {
      slug: "varna",
      name: "VarNa",
      tagline: "Smart Character Recognition System",
      accent: "#00E676",
      shortDesc: "AI-powered system for accurate text recognition from images under challenging conditions with minimal manual input.",
      objective: "To enable accurate, reliable, and automated text recognition from images—even under challenging conditions such as incomplete characters, shading, smudges, and major visual defects—through a simple user interaction (just drawing a box).",
      features: [
        {
          title: "Improve Accuracy Under Poor Conditions",
          desc: "Handles distorted, shaded, or partially missing characters effectively."
        },
        {
          title: "Reduce Dependency on Perfect Image Quality",
          desc: "Works even with banding, noise, or damaged text."
        },
        {
          title: "Support a Wide Variety of Inputs",
          desc: "Recognizes special characters, logos, and variable fonts using machine learning."
        },
        {
          title: "Minimize Manual Intervention",
          desc: "Fast and stable detection without needing fine-tuned rules or configurations."
        }
      ],
      conditionsHandled: [
        "Metal Embossing", "Narrow Pitch", "Deformed", "Low Contrast", 
        "Engraving", "Embossing", "SEMI Font", "Arced"
      ],
      detects: [
        "Incomplete Characters", "Shaded Characters", "Major Visual Defects", 
        "Special Characters & Symbols", "Logos and Variable Fonts"
      ]
    },
    {
      slug: "chatur",
      name: "ChatuR",
      tagline: "Smart Human Detection System",
      accent: "#A855F7",
      shortDesc: "Intelligent human detection and zone monitoring system with real-time alerts, multi-camera support and low-light accuracy.",
      objective: "To detect human presence in defined zones or geofenced areas in real-time with high accuracy, even in challenging environments, and trigger instant alerts and logging.",
      features: [
        {
          title: "Real-Time Human Detection",
          desc: "Instant detection and alerts on unauthorized human entry into restricted zones."
        },
        {
          title: "Zone-Based Monitoring",
          desc: "Customizable detection zones for precise area environments."
        },
        {
          title: "Low-Light & Infrared Support",
          desc: "Works effectively in dark or thermal imaging environments."
        },
        {
          title: "False Alarm Reduction",
          desc: "Advanced algorithms to filter out animals, shadows, or inanimate objects."
        },
        {
          title: "Multi Camera Support",
          desc: "Seamless integration with multiple IP cameras across enterprise facilities."
        },
        {
          title: "Event Logging & Alerts",
          desc: "Automatic recording and notifications via email or central dashboard."
        }
      ],
      conditionsHandled: [
        "Low Light", "Infrared / Thermal", "Occlusion", "Shadows", 
        "Crowded Scene", "Rain / Weather", "Partial Visibility"
      ]
    },
    {
      slug: "marga-chinh",
      name: "Marga Chinh",
      tagline: "Track & Trace Platform",
      accent: "#FF6B00",
      shortDesc: "End-to-end traceability platform using RFID/QR, real-time monitoring, analytics and alerts across the entire supply chain.",
      objective: "To provide a comprehensive smart factory system that ensures traceability, safety, and quality assurance across the entire lifecycle of prepackaged products using digital technology.",
      features: [
        {
          title: "Track & Trace System",
          desc: "Full product traceability from origin to consumer."
        },
        {
          title: "RFID & QR Code Integration",
          desc: "Efficient tracking at item, box, and pallet levels."
        },
        {
          title: "Real-Time Monitoring",
          desc: "Live status and issue alerts throughout the supply chain."
        },
        {
          title: "Data Analytics Services",
          desc: "Insights into safety, quality, and product trends."
        },
        {
          title: "Evaluation & Warning Module",
          desc: "Automatic alerts and customer feedback integration."
        },
        {
          title: "Cloud-Enabled Architecture",
          desc: "Scalable, secure backend and device data handling."
        }
      ],
      supplyChainFlow: [
        { stage: "Raw Material / Supplier", action: "Register & track raw materials" },
        { stage: "Manufacturing", action: "Capture production data in real time" },
        { stage: "Packaging", action: "Assign unique ID to each package" },
        { stage: "Warehouse", action: "Real-time inventory at SKU, box & pallet level" },
        { stage: "Distribution", action: "Monitor transit, location & delivery status" },
        { stage: "Retail / Consumer", action: "Verify authenticity & access product information" }
      ],
      components: [
        "RFID Tags & Readers", "QR Codes", "Handheld Devices", 
        "Printers", "IoT Gateways", "Cloud Platform"
      ]
    }
  ],

  industries: [
    {
      id: "automotive",
      name: "Automotive",
      desc: "Powering automotive supply chains with real-time visibility, part traceability and quality assurance for greater efficiency and safety."
    },
    {
      id: "fmcg",
      name: "FMCG",
      desc: "Ensuring end-to-end traceability, inventory visibility and distribution intelligence for fast-moving consumer goods."
    },
    {
      id: "food",
      name: "Food",
      desc: "Delivering complete traceability from farm to fork, ensuring food safety, quality compliance and consumer trust."
    },
    {
      id: "pharma",
      name: "Pharma",
      desc: "Enabling serialization, batch tracking and regulatory compliance to ensure product safety and integrity across the supply chain."
    },
    {
      id: "engineering",
      name: "Engineering",
      desc: "Streamlining component traceability, production monitoring and asset tracking to improve operational excellence."
    },
    {
      id: "chemical",
      name: "Chemical",
      desc: "Supporting safe handling, regulatory compliance and traceability of chemical products across complex supply chains."
    }
  ],

  caseStudies: [
    {
      id: "kia-setu",
      category: "Automotive",
      client: "KIA MOTORS",
      location: "Anantapur, India",
      title: "SETU Platform Implementation for Unauthorized Usage Prevention",
      challenge: [
        "Monitor user activity and prevent unauthorized usage of specified functions.",
        "Enhance security using OTP based authentication before stopping monitoring.",
        "Send email notifications containing OTP, employee details and reason for stopping.",
        "Log all events for audit and reporting purpose."
      ],
      solution: "Implemented SETU – Secured Tracking Unified Portal for secure monitoring and control of third-party applications.",
      architecture: [
        { layer: "1. Start Monitoring", desc: "Monitor user activity and prevent unauthorized usage of specified buttons / options / pre-loaded images" },
        { layer: "2. Stop Monitoring", desc: "Admin / Supervision Mode requiring authentication to pause monitoring" },
        { layer: "3. Log History", desc: "Logs all events for audit and reporting; filters by Date & Employee ID; exports to Excel" },
        { layer: "4. Admin Page", desc: "Allows authorized credential holders to update system names, admin passwords, and email IDs dynamically" }
      ],
      metrics: [
        { label: "Unauthorized Usage Prevented", value: "100%" },
        { label: "OTP Controlled Access", value: "100%" },
        { label: "User Activity Tracked", value: "100%" },
        { label: "Audit-Ready Logs", value: "100%" },
        { label: "Instant Email Notifications", value: "100%" }
      ],
      benefits: ["Enhanced Security", "Operational Transparency", "Improved Compliance", "Zero Unauthorized Downtime"]
    },
    {
      id: "kia-dc-nut-runner",
      category: "Automotive",
      client: "KIA MOTORS",
      location: "Anantapur, India",
      title: "DC Nut Runner Application Enhancement & MES Interlock",
      challenge: [
        "Inconsistent and missing torque & angle data.",
        "Communication gaps between PLC, MES, Tool Controller and SQL.",
        "VIN based program selection needed for multiple models.",
        "Incorrect, null and mismatched tightening results.",
        "Need for real-time monitoring and automatic interlock for NOK conditions."
      ],
      solution: "Enhanced the DC Nut Runner application to resolve system and data storage issues, ensure accurate real-time tightening data, and implement auto line stop for NOK conditions.",
      architecture: [
        { layer: "MES & Vehicle Logic", desc: "Vehicle MES communication, VIN-based logic, Sequence Order Information" },
        { layer: "Processing & Control", desc: "Industrial PC and PLC running automated tightening scripts" },
        { layer: "Execution & Hardware", desc: "DC Tool Controller, DC Nut Runner, Smart Tag / Scanner" },
        { layer: "Storage & Visualization", desc: "SQL Database storing Torque & Angle Results with live FOH Wheel Tightening HMI" }
      ],
      metrics: [
        { label: "Data Integrity", value: "100%" },
        { label: "Monitoring", value: "Real-Time" },
        { label: "Program Selection", value: "VIN-Based" },
        { label: "Interlock", value: "Auto-Stop on NOK" }
      ],
      benefits: ["100% Data Integrity", "Real-Time Monitoring", "VIN-Based Programming", "Seamless Integration", "Improved Quality", "Higher Efficiency"]
    },
    {
      id: "kia-wms",
      category: "Automotive",
      client: "KIA MOTORS",
      location: "Anantapur, India",
      title: "Service Support & Master-Slave Synchronization for WMS",
      challenge: [
        "Ensuring real-time synchronization between master and slave databases without data loss.",
        "Maintaining high availability and consistent job tracking under varying system loads.",
        "Database support and optimization for MySQL."
      ],
      solution: "Optimized MySQL database engine, enabled precise tracking of In Job and Out Job operations, and established master-slave architecture for total data integrity.",
      architecture: [
        { layer: "Client Stations", desc: "Location Stock Update terminals, In/Out Job scanning interfaces" },
        { layer: "Replication Engine", desc: "Master-Slave active sync across WMS_MASTER and WMS_SLAVE instances" },
        { layer: "Data Assurance", desc: "Automatic latency checks, query console, and instant heartbeat telemetry" }
      ],
      metrics: [
        { label: "Sync Latency", value: "<1s" },
        { label: "Data Loss", value: "0%" },
        { label: "System Health", value: "100%" },
        { label: "Job Tracking", value: "Real-Time" }
      ],
      benefits: ["Real-Time Synchronization", "High Availability", "Improved Performance", "Reliable Job Tracking", "Zero Data Loss"]
    },
    {
      id: "vinfast-flashing",
      category: "Automotive",
      client: "VINFAST",
      location: "Thoothukudi, India",
      title: "E-Motor Firmware Flashing for EDS (CAN UDS Protocol)",
      challenge: [
        "Ensuring reliable communication and successful ECU programming under strict timing, power, and protocol constraints.",
        "Deleting existing programs from EDS memory cleanly and uploading new firmware via CAN UDS.",
        "Downloading and storing security/config key provisions and verifying integrity."
      ],
      solution: "Delivered automated E-Motor Flashing system with 6-stage workflow: Connect -> Security Access -> Erase -> Download -> Verify -> Complete.",
      architecture: [
        { layer: "Supervisory & Input", desc: "Industrial PC, Scanner, MES Integration" },
        { layer: "Bus Interface", desc: "CAN Interface running ISO 14229 (CAN UDS Protocol)" },
        { layer: "Target & Energy", desc: "EDS Device target controller powered by monitored Power Supply" }
      ],
      metrics: [
        { label: "Flashing Success", value: "100%" },
        { label: "Cycle Time", value: "Optimized" },
        { label: "Key Provisioning", value: "Encrypted" },
        { label: "Protocol", value: "CAN UDS" }
      ],
      benefits: ["Reliable ECU Programming", "Faster Flashing Cycle Time", "Secure Key Provisioning", "Stable CAN & UDS", "Detailed Reports", "High Availability"]
    },
    {
      id: "lt-data-acquisition",
      category: "Engineering",
      client: "LARSEN & TOUBRO (L&T)",
      location: "Vadodara, India",
      title: "Real Time Data Acquisition & Management System with 65\" Andon",
      challenge: [
        "Acquiring data from multiple machines simultaneously without data loss.",
        "Maintaining reliable real-time communication between PLCs, SCADA, vision cameras and database.",
        "Synchronizing barcode scanners, vision inspection systems, and operator inputs."
      ],
      solution: "Engineered enterprise Real Time Production Management System featuring centralized MS SQL Server, SCADA monitoring, and shop-floor 65\" LED Andon display.",
      architecture: [
        { layer: "User Tier", desc: "Operator, Supervisor, Production, Maintenance, Management" },
        { layer: "Application Tier", desc: "Production Monitoring, SCADA Visualization, Report Dashboard" },
        { layer: "Service Tier", desc: "Data Acquisition Service, Alarm Management Service, Analytics Service" },
        { layer: "Data Tier", desc: "Production Data, MS SQL Server, Alarm History" },
        { layer: "Communication Tier", desc: "OPC UA / Ethernet / Modbus TCP Gateway" },
        { layer: "Perception Tier", desc: "PLC, Vision Camera, Barcode Scanner, HMI, Industrial PC, 65\" LED Andon Display" }
      ],
      metrics: [
        { label: "Machine Data Loss", value: "0%" },
        { label: "Visualization", value: "65\" Andon" },
        { label: "Reporting", value: "Automated OEE" },
        { label: "Alerts", value: "Instant Real-Time" }
      ],
      benefits: ["Real-Time Monitoring", "Improved Efficiency", "Centralized Data", "Automated Reporting", "Instant Alerts", "Better Decisions"]
    },
    {
      id: "jeeni-traceability",
      category: "Food",
      client: "JEENI MILLET HEALTH MIX",
      location: "Bangalore, India",
      title: "End-to-End Track & Traceability of Goods in Real Time",
      challenge: [
        "Unified application service for all stakeholders across raw material, production, distribution and retail.",
        "Real-time tracking of food products using QR codes, RFID, barcodes, and GPS.",
        "Preventing counterfeit products and speeding up recall operations."
      ],
      solution: "Deployed complete Food Life Cycle Management Service connecting farm/supplier to packaging, warehouse, transit, retail and consumer scanning.",
      architecture: [
        { layer: "Stakeholder Tier", desc: "Manufacturer, Distributor, Retailer, Consumer, Administrator" },
        { layer: "Application Tier", desc: "Food Life Cycle Management Service: Production, Logistics, Consumption" },
        { layer: "Service Tier", desc: "Tracking & Tracing Service, Evaluation & Warning Service, Data Analytics Service" },
        { layer: "Data Tier", desc: "Object Data, XML Schema, Event Data" },
        { layer: "Perception & Gateway", desc: "QR Code, RFID, Barcodes, GPS via Smart Gateway" }
      ],
      metrics: [
        { label: "Traceability Scope", value: "Farm to Fork" },
        { label: "Recall Management", value: "Accelerated" },
        { label: "Safety & Quality", value: "100% Verified" },
        { label: "Stakeholder Access", value: "Secured" }
      ],
      benefits: ["End to End Traceability", "Real Time Tracking", "Risk Detection & Alerts", "Data Insights & Reporting", "Stakeholder Visibility"]
    }
  ],

  clientsList: [
    { name: "Larsen & Toubro", tag: "It's all about Imagineering", sector: "Engineering & Infrastructure" },
    { name: "KIA Motors", tag: "Movement that inspires", sector: "Automotive" },
    { name: "Toyota", tag: "Mobility for All", sector: "Automotive" },
    { name: "VinFast", tag: "Boundless Together", sector: "Electric Vehicles" },
    { name: "Aditya Birla Group", tag: "Taking India to the World", sector: "Conglomerate / Materials" },
    { name: "Daikin", tag: "Perfecting the Air", sector: "HVAC & Manufacturing" },
    { name: "Jeeni Millet Health Mix", tag: "Wholesome Health", sector: "Food & Beverage" },
    { name: "Daifuku", tag: "Automation that Inspires", sector: "Intralogistics & Automation" },
    { name: "Maruti Suzuki", tag: "Way of Life", sector: "Automotive" },
    { name: "Siemens", tag: "Ingenuity for life", sector: "Industrial Automation" },
    { name: "Amara Raja", tag: "Gotta be a better way", sector: "Energy & Electronics" },
    { name: "Schneider Electric", tag: "Life Is On", sector: "Energy Management & Automation" },
    { name: "Kushagramati", tag: "A People-First Company", sector: "Technology & Engineering" }
  ],

  technologyStack: {
    plcSoftware: [
      { brand: "SIEMENS", software: "Step 7 & TIA Portal" },
      { brand: "Allen-Bradley", software: "RS Logix 5000" },
      { brand: "DELTA", software: "WPL Soft & ISP Soft" },
      { brand: "Schneider Electric", software: "EcoStruxure" },
      { brand: "MITSUBISHI ELECTRIC", software: "GX Works 2 & 3" },
      { brand: "OMRON", software: "Software RS Logix 5000 / CX-Programmer" },
      { brand: "LS ELECTRIC", software: "Software RS Logix 5000 / XG5000" },
      { brand: "YASKAWA", software: "MPE720" },
      { brand: "LC", software: "LC Software" }
    ],
    hmiScadaSoftware: [
      { brand: "SIEMENS", software: "WinCC Flexible / WinCC TIA" },
      { brand: "OMRON", software: "NT series / Sysmac Studio" },
      { brand: "DELTA", software: "DOP Soft" },
      { brand: "Allen-Bradley", software: "FactoryTalk View ME Station" },
      { brand: "MITSUBISHI ELECTRIC", software: "GT Soft GOT 2000" },
      { brand: "LS ELECTRIC", software: "WinCC Flexible / XP-Builder" },
      { brand: "YASKAWA", software: "YCP (Yaskawa Cockpit)" },
      { brand: "LC", software: "LC HMI Software" }
    ]
  },

  controlInstrumentation: {
    blocks: [
      {
        number: "01",
        title: "Control Systems",
        desc: "PLC, DCS, SCADA, HMI, Motion Control and Automation Panels for industrial applications."
      },
      {
        number: "02",
        title: "Instrumentation",
        desc: "Pressure, Temperature, Flow, Level, Proximity, Limit Switch, Process Instruments and Field Devices."
      },
      {
        number: "03",
        title: "Panel Solutions",
        desc: "Design, Manufacturing and Integration of Control Panels, Junction Boxes and I/O Panels."
      },
      {
        number: "04",
        title: "Services & Support",
        desc: "Installation, Loop Checking, Calibration, Commissioning and After-Sales Support."
      }
    ],
    panelFeatures: [
      { title: "Neat & Standard Wiring", desc: "Built for reliability and easy maintenance." },
      { title: "Industrial Compliance", desc: "As per rigorous industry safety standards." },
      { title: "Professional Installation", desc: "Clean, safe, labeled and efficient execution." },
      { title: "Supports PLC, VFD & I/O Systems", desc: "Complete integrated panel wiring solutions." },
      { title: "Expert Engineering Team", desc: "Delivering industrial projects with precision." },
      { title: "Built for a Smarter Tomorrow", desc: "Empowering next-generation intelligent manufacturing." }
    ]
  }
};
