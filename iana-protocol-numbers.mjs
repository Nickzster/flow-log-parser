// copied from: https://github.com/bahamas10/node-protocol-numbers/blob/master/protocol-numbers.js

export const protocol_numbers = {
  0: {
    value: "0",
    name: "HOPOPT",
    description: "IPv6 Hop-by-Hop Option",
    xref: {
      $: {
        type: "rfc",
        data: "rfc2460",
      },
    },
  },
  1: {
    value: "1",
    name: "ICMP",
    description: "Internet Control Message",
    xref: {
      $: {
        type: "rfc",
        data: "rfc792",
      },
    },
  },
  2: {
    value: "2",
    name: "IGMP",
    description: "Internet Group Management",
    xref: {
      $: {
        type: "rfc",
        data: "rfc1112",
      },
    },
  },
  3: {
    value: "3",
    name: "GGP",
    description: "Gateway-to-Gateway",
    xref: {
      $: {
        type: "rfc",
        data: "rfc823",
      },
    },
  },
  4: {
    value: "4",
    name: "IPv4",
    description: "IPv4 encapsulation",
    xref: {
      $: {
        type: "rfc",
        data: "rfc2003",
      },
    },
  },
  5: {
    value: "5",
    name: "ST",
    description: "Stream",
    xref: {
      $: {
        type: "rfc",
        data: "rfc1190",
      },
    },
  },
  6: {
    value: "6",
    name: "TCP",
    description: "Transmission Control",
    xref: {
      $: {
        type: "rfc",
        data: "rfc793",
      },
    },
  },
  7: {
    value: "7",
    name: "CBT",
    description: "CBT",
    xref: {
      $: {
        type: "person",
        data: "Tony_Ballardie",
      },
    },
  },
  8: {
    value: "8",
    name: "EGP",
    description: "Exterior Gateway Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc888",
      },
    },
  },
  9: {
    $: {
      date: "1995-06",
    },
    value: "9",
    name: "IGP",
    description:
      "any private interior gateway             \n(used by Cisco for their IGRP)",
    xref: {
      $: {
        type: "person",
        data: "Internet_Assigned_Numbers_Authority",
      },
    },
  },
  10: {
    value: "10",
    name: "BBN-RCC-MON",
    description: "BBN RCC Monitoring",
    xref: {
      $: {
        type: "person",
        data: "Steve_Chipman",
      },
    },
  },
  11: {
    value: "11",
    name: "NVP-II",
    description: "Network Voice Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc741",
      },
    },
  },
  12: {
    value: "12",
    name: "PUP",
    description: "PUP",
    xref: {
      _: 'Boggs, D., J. Shoch, E. Taft, and R. Metcalfe, "PUP: An\nInternetwork Architecture", XEROX Palo Alto Research Center,\nCSL-79-10, July 1979; also in IEEE Transactions on\nCommunication, Volume COM-28, Number 4, April 1980.',
      $: {
        type: "text",
      },
    },
  },
  13: {
    value: "13",
    name: "ARGUS",
    description: "ARGUS",
    xref: {
      $: {
        type: "person",
        data: "Robert_W_Scheifler",
      },
    },
  },
  14: {
    value: "14",
    name: "EMCON",
    description: "EMCON",
    xref: {
      _: "<mystery contact>",
      $: {
        type: "text",
      },
    },
  },
  15: {
    value: "15",
    name: "XNET",
    description: "Cross Net Debugger",
    xref: {
      _: 'Haverty, J., "XNET Formats for Internet Protocol Version 4",\nIEN 158, October 1980.',
      $: {
        type: "text",
      },
    },
  },
  16: {
    value: "16",
    name: "CHAOS",
    description: "Chaos",
    xref: {
      $: {
        type: "person",
        data: "J_Noel_Chiappa",
      },
    },
  },
  17: {
    value: "17",
    name: "UDP",
    description: "User Datagram",
    xref: {
      $: {
        type: "rfc",
        data: "rfc768",
      },
    },
  },
  18: {
    value: "18",
    name: "MUX",
    description: "Multiplexing",
    xref: {
      _: 'Cohen, D. and J. Postel, "Multiplexing Protocol", IEN 90,\nUSC/Information Sciences Institute, May 1979.',
      $: {
        type: "text",
      },
    },
  },
  19: {
    value: "19",
    name: "DCN-MEAS",
    description: "DCN Measurement Subsystems",
    xref: {
      $: {
        type: "person",
        data: "David_Mills",
      },
    },
  },
  20: {
    value: "20",
    name: "HMP",
    description: "Host Monitoring",
    xref: {
      $: {
        type: "rfc",
        data: "rfc869",
      },
    },
  },
  21: {
    value: "21",
    name: "PRM",
    description: "Packet Radio Measurement",
    xref: {
      $: {
        type: "person",
        data: "Zaw_Sing_Su",
      },
    },
  },
  22: {
    value: "22",
    name: "XNS-IDP",
    description: "XEROX NS IDP",
    xref: {
      _: '"The Ethernet, A Local Area Network: Data Link Layer and\nPhysical Layer Specification", AA-K759B-TK, Digital\nEquipment Corporation, Maynard, MA.  Also as: "The\nEthernet - A Local Area Network", Version 1.0, Digital\nEquipment Corporation, Intel Corporation, Xerox\nCorporation, September 1980.  And: "The Ethernet, A Local\nArea Network: Data Link Layer and Physical Layer\nSpecifications", Digital, Intel and Xerox, November 1982.\nAnd: XEROX, "The Ethernet, A Local Area Network: Data Link\nLayer and Physical Layer Specification", X3T51/80-50,\nXerox Corporation, Stamford, CT., October 1980.',
      $: {
        type: "text",
      },
    },
  },
  23: {
    value: "23",
    name: "TRUNK-1",
    description: "Trunk-1",
    xref: {
      $: {
        type: "person",
        data: "Barry_Boehm",
      },
    },
  },
  24: {
    value: "24",
    name: "TRUNK-2",
    description: "Trunk-2",
    xref: {
      $: {
        type: "person",
        data: "Barry_Boehm",
      },
    },
  },
  25: {
    value: "25",
    name: "LEAF-1",
    description: "Leaf-1",
    xref: {
      $: {
        type: "person",
        data: "Barry_Boehm",
      },
    },
  },
  26: {
    value: "26",
    name: "LEAF-2",
    description: "Leaf-2",
    xref: {
      $: {
        type: "person",
        data: "Barry_Boehm",
      },
    },
  },
  27: {
    value: "27",
    name: "RDP",
    description: "Reliable Data Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc908",
      },
    },
  },
  28: {
    value: "28",
    name: "IRTP",
    description: "Internet Reliable Transaction",
    xref: {
      $: {
        type: "rfc",
        data: "rfc938",
      },
    },
  },
  29: {
    value: "29",
    name: "ISO-TP4",
    description: "ISO Transport Protocol Class 4",
    xref: {
      $: {
        type: "rfc",
        data: "rfc905",
      },
    },
  },
  30: {
    value: "30",
    name: "NETBLT",
    description: "Bulk Data Transfer Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc969",
      },
    },
  },
  31: {
    value: "31",
    name: "MFE-NSP",
    description: "MFE Network Services Protocol",
    xref: {
      _: 'Shuttleworth, B., "A Documentary of MFENet, a National\nComputer Network", UCRL-52317, Lawrence Livermore Labs,\nLivermore, California, June 1977.',
      $: {
        type: "text",
      },
    },
  },
  32: {
    value: "32",
    name: "MERIT-INP",
    description: "MERIT Internodal Protocol",
    xref: {
      $: {
        type: "person",
        data: "Hans_Werner_Braun",
      },
    },
  },
  33: {
    value: "33",
    name: "DCCP",
    description: "Datagram Congestion Control Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc4340",
      },
    },
  },
  34: {
    value: "34",
    name: "3PC",
    description: "Third Party Connect Protocol",
    xref: {
      $: {
        type: "person",
        data: "Stuart_A_Friedberg",
      },
    },
  },
  35: {
    value: "35",
    name: "IDPR",
    description: "Inter-Domain Policy Routing Protocol",
    xref: {
      $: {
        type: "person",
        data: "Martha_Steenstrup",
      },
    },
  },
  36: {
    value: "36",
    name: "XTP",
    description: "XTP",
    xref: {
      $: {
        type: "person",
        data: "Greg_Chesson",
      },
    },
  },
  37: {
    value: "37",
    name: "DDP",
    description: "Datagram Delivery Protocol",
    xref: {
      $: {
        type: "person",
        data: "Wesley_Craig",
      },
    },
  },
  38: {
    value: "38",
    name: "IDPR-CMTP",
    description: "IDPR Control Message Transport Proto",
    xref: {
      $: {
        type: "person",
        data: "Martha_Steenstrup",
      },
    },
  },
  39: {
    value: "39",
    name: "TP++",
    description: "TP++ Transport Protocol",
    xref: {
      $: {
        type: "person",
        data: "Dirk_Fromhein",
      },
    },
  },
  40: {
    $: {
      date: "1995-07",
    },
    value: "40",
    name: "IL",
    description: "IL Transport Protocol",
    xref: {
      $: {
        type: "person",
        data: "Dave_Presotto",
      },
    },
  },
  41: {
    $: {
      date: "1995-03",
    },
    value: "41",
    name: "IPv6",
    description: "IPv6 encapsulation",
    xref: {
      $: {
        type: "rfc",
        data: "rfc2473",
      },
    },
  },
  42: {
    value: "42",
    name: "SDRP",
    description: "Source Demand Routing Protocol",
    xref: {
      $: {
        type: "person",
        data: "Deborah_Estrin",
      },
    },
  },
  43: {
    $: {
      date: "1995-03",
    },
    value: "43",
    name: "IPv6-Route",
    description: "Routing Header for IPv6",
    xref: {
      $: {
        type: "person",
        data: "Steve_Deering",
      },
    },
  },
  44: {
    $: {
      date: "1995-03",
    },
    value: "44",
    name: "IPv6-Frag",
    description: "Fragment Header for IPv6",
    xref: {
      $: {
        type: "person",
        data: "Steve_Deering",
      },
    },
  },
  45: {
    value: "45",
    name: "IDRP",
    description: "Inter-Domain Routing Protocol",
    xref: {
      $: {
        type: "person",
        data: "Sue_Hares",
      },
    },
  },
  46: {
    $: {
      date: "1997-07",
    },
    value: "46",
    name: "RSVP",
    description: "Reservation Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc2205",
      },
    },
  },
  47: {
    value: "47",
    name: "GRE",
    description: "Generic Routing Encapsulation",
    xref: {
      $: {
        type: "rfc",
        data: "rfc1701",
      },
    },
  },
  48: {
    value: "48",
    name: "DSR",
    description: "Dynamic Source Routing Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc4728",
      },
    },
  },
  49: {
    value: "49",
    name: "BNA",
    description: "BNA",
    xref: {
      _: "Gary Salamon",
      $: {
        type: "text",
      },
    },
  },
  50: {
    value: "50",
    name: "ESP",
    description: "Encap Security Payload",
    xref: {
      $: {
        type: "rfc",
        data: "rfc4303",
      },
    },
  },
  51: {
    value: "51",
    name: "AH",
    description: "Authentication Header",
    xref: {
      $: {
        type: "rfc",
        data: "rfc4302",
      },
    },
  },
  52: {
    value: "52",
    name: "I-NLSP",
    description: "Integrated Net Layer Security  TUBA",
    xref: {
      $: {
        type: "person",
        data: "K_Robert_Glenn",
      },
    },
  },
  53: {
    value: "53",
    name: "SWIPE",
    description: "IP with Encryption",
    xref: {
      $: {
        type: "person",
        data: "John_Ioannidis",
      },
    },
  },
  54: {
    value: "54",
    name: "NARP",
    description: "NBMA Address Resolution Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc1735",
      },
    },
  },
  55: {
    $: {
      date: "1994-10",
    },
    value: "55",
    name: "MOBILE",
    description: "IP Mobility",
    xref: {
      $: {
        type: "person",
        data: "Charlie_Perkins",
      },
    },
  },
  56: {
    $: {
      date: "1994-10",
    },
    value: "56",
    name: "TLSP",
    description:
      "Transport Layer Security Protocol        \nusing Kryptonet key management",
    xref: {
      $: {
        type: "person",
        data: "Christer_Oberg",
      },
    },
  },
  57: {
    $: {
      date: "1995-09",
    },
    value: "57",
    name: "SKIP",
    description: "SKIP",
    xref: {
      $: {
        type: "person",
        data: "Tom_Markson",
      },
    },
  },
  58: {
    value: "58",
    name: "IPv6-ICMP",
    description: "ICMP for IPv6",
    xref: {
      $: {
        type: "rfc",
        data: "rfc2460",
      },
    },
  },
  59: {
    value: "59",
    name: "IPv6-NoNxt",
    description: "No Next Header for IPv6",
    xref: {
      $: {
        type: "rfc",
        data: "rfc2460",
      },
    },
  },
  60: {
    value: "60",
    name: "IPv6-Opts",
    description: "Destination Options for IPv6",
    xref: {
      $: {
        type: "rfc",
        data: "rfc2460",
      },
    },
  },
  61: {
    $: {
      date: "1995-06",
    },
    value: "61",
    description: "any host internal protocol",
    xref: {
      $: {
        type: "person",
        data: "Internet_Assigned_Numbers_Authority",
      },
    },
  },
  62: {
    value: "62",
    name: "CFTP",
    description: "CFTP",
    xref: {
      _: 'Forsdick, H., "CFTP", Network Message, Bolt Beranek and\nNewman, January 1982.',
      $: {
        type: "text",
      },
    },
  },
  63: {
    $: {
      date: "1995-06",
    },
    value: "63",
    description: "any local network",
    xref: {
      $: {
        type: "person",
        data: "Internet_Assigned_Numbers_Authority",
      },
    },
  },
  64: {
    value: "64",
    name: "SAT-EXPAK",
    description: "SATNET and Backroom EXPAK",
    xref: {
      $: {
        type: "person",
        data: "Steven_Blumenthal",
      },
    },
  },
  65: {
    value: "65",
    name: "KRYPTOLAN",
    description: "Kryptolan",
    xref: {
      _: "Paul Liu",
      $: {
        type: "text",
      },
    },
  },
  66: {
    value: "66",
    name: "RVD",
    description: "MIT Remote Virtual Disk Protocol",
    xref: {
      $: {
        type: "person",
        data: "Michael_Greenwald",
      },
    },
  },
  67: {
    value: "67",
    name: "IPPC",
    description: "Internet Pluribus Packet Core",
    xref: {
      $: {
        type: "person",
        data: "Steven_Blumenthal",
      },
    },
  },
  68: {
    $: {
      date: "1995-06",
    },
    value: "68",
    description: "any distributed file system",
    xref: {
      $: {
        type: "person",
        data: "Internet_Assigned_Numbers_Authority",
      },
    },
  },
  69: {
    value: "69",
    name: "SAT-MON",
    description: "SATNET Monitoring",
    xref: {
      $: {
        type: "person",
        data: "Steven_Blumenthal",
      },
    },
  },
  70: {
    value: "70",
    name: "VISA",
    description: "VISA Protocol",
    xref: {
      $: {
        type: "person",
        data: "Gene_Tsudik",
      },
    },
  },
  71: {
    value: "71",
    name: "IPCV",
    description: "Internet Packet Core Utility",
    xref: {
      $: {
        type: "person",
        data: "Steven_Blumenthal",
      },
    },
  },
  72: {
    value: "72",
    name: "CPNX",
    description: "Computer Protocol Network Executive",
    xref: {
      _: "David Mittnacht",
      $: {
        type: "text",
      },
    },
  },
  73: {
    value: "73",
    name: "CPHB",
    description: "Computer Protocol Heart Beat",
    xref: {
      _: "David Mittnacht",
      $: {
        type: "text",
      },
    },
  },
  74: {
    value: "74",
    name: "WSN",
    description: "Wang Span Network",
    xref: {
      _: "Victor Dafoulas",
      $: {
        type: "text",
      },
    },
  },
  75: {
    value: "75",
    name: "PVP",
    description: "Packet Video Protocol",
    xref: {
      $: {
        type: "person",
        data: "Steve_Casner",
      },
    },
  },
  76: {
    value: "76",
    name: "BR-SAT-MON",
    description: "Backroom SATNET Monitoring",
    xref: {
      $: {
        type: "person",
        data: "Steven_Blumenthal",
      },
    },
  },
  77: {
    value: "77",
    name: "SUN-ND",
    description: "SUN ND PROTOCOL-Temporary",
    xref: {
      $: {
        type: "person",
        data: "William_Melohn",
      },
    },
  },
  78: {
    value: "78",
    name: "WB-MON",
    description: "WIDEBAND Monitoring",
    xref: {
      $: {
        type: "person",
        data: "Steven_Blumenthal",
      },
    },
  },
  79: {
    value: "79",
    name: "WB-EXPAK",
    description: "WIDEBAND EXPAK",
    xref: {
      $: {
        type: "person",
        data: "Steven_Blumenthal",
      },
    },
  },
  80: {
    value: "80",
    name: "ISO-IP",
    description: "ISO Internet Protocol",
    xref: {
      $: {
        type: "person",
        data: "Marshall_T_Rose",
      },
    },
  },
  81: {
    value: "81",
    name: "VMTP",
    description: "VMTP",
    xref: {
      $: {
        type: "person",
        data: "Dave_Cheriton",
      },
    },
  },
  82: {
    value: "82",
    name: "SECURE-VMTP",
    description: "SECURE-VMTP",
    xref: {
      $: {
        type: "person",
        data: "Dave_Cheriton",
      },
    },
  },
  83: {
    value: "83",
    name: "VINES",
    description: "VINES",
    xref: {
      _: "Brian Horn",
      $: {
        type: "text",
      },
    },
  },
  84: {
    value: "84",
    name: "IPTM",
    description: "Protocol Internet Protocol Traffic Manager",
    xref: {
      $: {
        type: "person",
        data: "Jim_Stevens",
      },
    },
  },
  85: {
    value: "85",
    name: "NSFNET-IGP",
    description: "NSFNET-IGP",
    xref: {
      $: {
        type: "person",
        data: "Hans_Werner_Braun",
      },
    },
  },
  86: {
    value: "86",
    name: "DGP",
    description: "Dissimilar Gateway Protocol",
    xref: {
      _: 'M/A-COM Government Systems, "Dissimilar Gateway Protocol\nSpecification, Draft Version", Contract no. CS901145,\nNovember 16, 1987.',
      $: {
        type: "text",
      },
    },
  },
  87: {
    value: "87",
    name: "TCF",
    description: "TCF",
    xref: {
      $: {
        type: "person",
        data: "Guillermo_A_Loyola",
      },
    },
  },
  88: {
    value: "88",
    name: "EIGRP",
    description: "EIGRP",
    xref: {
      _: 'Cisco Systems, "Gateway Server Reference Manual", Manual\nRevision B, January 10, 1988.',
      $: {
        type: "text",
      },
    },
  },
  89: {
    value: "89",
    name: "OSPFIGP",
    description: "OSPFIGP",
    xref: {
      $: {
        type: "rfc",
        data: "rfc1583",
      },
    },
  },
  90: {
    value: "90",
    name: "Sprite-RPC",
    description: "Sprite RPC Protocol",
    xref: {
      _: 'Welch, B., "The Sprite Remote Procedure Call System",\nTechnical Report, UCB/Computer Science Dept., 86/302,\nUniversity of California at Berkeley, June 1986.',
      $: {
        type: "text",
      },
    },
  },
  91: {
    value: "91",
    name: "LARP",
    description: "Locus Address Resolution Protocol",
    xref: {
      _: "Brian Horn",
      $: {
        type: "text",
      },
    },
  },
  92: {
    value: "92",
    name: "MTP",
    description: "Multicast Transport Protocol",
    xref: {
      $: {
        type: "person",
        data: "Susie_Armstrong",
      },
    },
  },
  93: {
    value: "93",
    name: "AX.25",
    description: "AX.25 Frames",
    xref: {
      $: {
        type: "person",
        data: "Brian_Kantor",
      },
    },
  },
  94: {
    value: "94",
    name: "IPIP",
    description: "IP-within-IP Encapsulation Protocol",
    xref: {
      $: {
        type: "person",
        data: "John_Ioannidis",
      },
    },
  },
  95: {
    value: "95",
    name: "MICP",
    description: "Mobile Internetworking Control Pro.",
    xref: {
      $: {
        type: "person",
        data: "John_Ioannidis",
      },
    },
  },
  96: {
    value: "96",
    name: "SCC-SP",
    description: "Semaphore Communications Sec. Pro.",
    xref: {
      $: {
        type: "person",
        data: "Howard_Hart",
      },
    },
  },
  97: {
    value: "97",
    name: "ETHERIP",
    description: "Ethernet-within-IP Encapsulation",
    xref: {
      $: {
        type: "rfc",
        data: "rfc3378",
      },
    },
  },
  98: {
    value: "98",
    name: "ENCAP",
    description: "Encapsulation Header",
    xref: {
      $: {
        type: "rfc",
        data: "rfc1241",
      },
    },
  },
  99: {
    $: {
      date: "1995-06",
    },
    value: "99",
    description: "any private encryption scheme",
    xref: {
      $: {
        type: "person",
        data: "Internet_Assigned_Numbers_Authority",
      },
    },
  },
  100: {
    value: "100",
    name: "GMTP",
    description: "GMTP",
    xref: {
      _: "[RXB5]",
      $: {
        type: "text",
      },
    },
  },
  101: {
    value: "101",
    name: "IFMP",
    description: "Ipsilon Flow Management Protocol",
    xref: {
      $: {
        type: "person",
        data: "Bob_Hinden",
      },
    },
  },
  102: {
    $: {
      date: "1995-12",
    },
    value: "102",
    name: "PNNI",
    description: "PNNI over IP",
    xref: {
      $: {
        type: "person",
        data: "Ross_Callon",
      },
    },
  },
  103: {
    $: {
      date: "1996-03",
    },
    value: "103",
    name: "PIM",
    description: "Protocol Independent Multicast",
    xref: {
      $: {
        type: "rfc",
        data: "rfc4601",
      },
    },
  },
  104: {
    $: {
      date: "1997-01",
    },
    value: "104",
    name: "ARIS",
    description: "ARIS",
    xref: {
      $: {
        type: "person",
        data: "Nancy_Feldman",
      },
    },
  },
  105: {
    $: {
      date: "1997-03",
    },
    value: "105",
    name: "SCPS",
    description: "SCPS",
    xref: {
      $: {
        type: "person",
        data: "Robert_Durst",
      },
    },
  },
  106: {
    $: {
      date: "1997-07",
    },
    value: "106",
    name: "QNX",
    description: "QNX",
    xref: {
      $: {
        type: "person",
        data: "Michael_Hunter",
      },
    },
  },
  107: {
    $: {
      date: "1997-07",
    },
    value: "107",
    name: "A/N",
    description: "Active Networks",
    xref: {
      $: {
        type: "person",
        data: "Bob_Braden",
      },
    },
  },
  108: {
    value: "108",
    name: "IPComp",
    description: "IP Payload Compression Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc2393",
      },
    },
  },
  109: {
    $: {
      date: "1997-09",
    },
    value: "109",
    name: "SNP",
    description: "Sitara Networks Protocol",
    xref: {
      $: {
        type: "person",
        data: "Manickam_R_Sridhar",
      },
    },
  },
  110: {
    $: {
      date: "1997-10",
    },
    value: "110",
    name: "Compaq-Peer",
    description: "Compaq Peer Protocol",
    xref: {
      $: {
        type: "person",
        data: "Victor_Volpe",
      },
    },
  },
  111: {
    $: {
      date: "1997-10",
    },
    value: "111",
    name: "IPX-in-IP",
    description: "IPX in IP",
    xref: {
      $: {
        type: "person",
        data: "CJ_Lee",
      },
    },
  },
  112: {
    value: "112",
    name: "VRRP",
    description: "Virtual Router Redundancy Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc5798",
      },
    },
  },
  113: {
    $: {
      date: "1998-01",
    },
    value: "113",
    name: "PGM",
    description: "PGM Reliable Transport Protocol",
    xref: {
      $: {
        type: "person",
        data: "Tony_Speakman",
      },
    },
  },
  114: {
    $: {
      date: "1995-06",
    },
    value: "114",
    description: "any 0-hop protocol",
    xref: {
      $: {
        type: "person",
        data: "Internet_Assigned_Numbers_Authority",
      },
    },
  },
  115: {
    $: {
      date: "1998-04",
    },
    value: "115",
    name: "L2TP",
    description: "Layer Two Tunneling Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc3931",
      },
    },
  },
  116: {
    $: {
      date: "1998-06",
    },
    value: "116",
    name: "DDX",
    description: "D-II Data Exchange (DDX)",
    xref: {
      $: {
        type: "person",
        data: "John_Worley",
      },
    },
  },
  117: {
    $: {
      date: "1998-10",
    },
    value: "117",
    name: "IATP",
    description: "Interactive Agent Transfer Protocol",
    xref: {
      $: {
        type: "person",
        data: "John_Murphy",
      },
    },
  },
  118: {
    $: {
      date: "1998-11",
    },
    value: "118",
    name: "STP",
    description: "Schedule Transfer Protocol",
    xref: {
      $: {
        type: "person",
        data: "Jean_Michel_Pittet",
      },
    },
  },
  119: {
    $: {
      date: "1998-11",
    },
    value: "119",
    name: "SRP",
    description: "SpectraLink Radio Protocol",
    xref: {
      $: {
        type: "person",
        data: "Mark_Hamilton",
      },
    },
  },
  120: {
    $: {
      date: "1999-03",
    },
    value: "120",
    name: "UTI",
    description: "UTI",
    xref: {
      $: {
        type: "person",
        data: "Peter_Lothberg",
      },
    },
  },
  121: {
    $: {
      date: "1999-03",
    },
    value: "121",
    name: "SMP",
    description: "Simple Message Protocol",
    xref: {
      $: {
        type: "person",
        data: "Leif_Ekblad",
      },
    },
  },
  122: {
    $: {
      date: "1999-06",
    },
    value: "122",
    name: "SM",
    description: "SM",
    xref: {
      $: {
        type: "person",
        data: "Jon_Crowcroft",
      },
    },
  },
  123: {
    $: {
      date: "1999-08",
    },
    value: "123",
    name: "PTP",
    description: "Performance Transparency Protocol",
    xref: {
      $: {
        type: "person",
        data: "Michael_Welzl",
      },
    },
  },
  124: {
    $: {
      date: "1999-08",
    },
    value: "124",
    name: "ISIS over IPv4",
    xref: {
      $: {
        type: "person",
        data: "Tony_Przygienda",
      },
    },
  },
  125: {
    $: {
      date: "1999-08",
    },
    value: "125",
    name: "FIRE",
    xref: {
      $: {
        type: "person",
        data: "Criag_Partridge",
      },
    },
  },
  126: {
    $: {
      date: "1999-08",
    },
    value: "126",
    name: "CRTP",
    description: "Combat Radio Transport Protocol",
    xref: {
      $: {
        type: "person",
        data: "Robert_Sautter",
      },
    },
  },
  127: {
    $: {
      date: "1999-08",
    },
    value: "127",
    name: "CRUDP",
    description: "Combat Radio User Datagram",
    xref: {
      $: {
        type: "person",
        data: "Robert_Sautter",
      },
    },
  },
  128: {
    $: {
      date: "1999-08",
    },
    value: "128",
    name: "SSCOPMCE",
    xref: {
      $: {
        type: "person",
        data: "Kurt_Waber",
      },
    },
  },
  129: {
    value: "129",
    name: "IPLT",
    xref: {
      _: "[Hollbach]",
      $: {
        type: "text",
      },
    },
  },
  130: {
    value: "130",
    name: "SPS",
    description: "Secure Packet Shield",
    xref: {
      $: {
        type: "person",
        data: "Bill_McIntosh",
      },
    },
  },
  131: {
    $: {
      date: "2000-03",
    },
    value: "131",
    name: "PIPE",
    description: "Private IP Encapsulation within IP",
    xref: {
      $: {
        type: "person",
        data: "Bernhard_Petri",
      },
    },
  },
  132: {
    $: {
      date: "2000-04",
    },
    value: "132",
    name: "SCTP",
    description: "Stream Control Transmission Protocol",
    xref: {
      $: {
        type: "person",
        data: "Randall_R_Stewart",
      },
    },
  },
  133: {
    $: {
      date: "2000-05",
    },
    value: "133",
    name: "FC",
    description: "Fibre Channel",
    xref: {
      $: {
        type: "person",
        data: "Murali_Rajagopal",
      },
    },
  },
  134: {
    value: "134",
    name: "RSVP-E2E-IGNORE",
    xref: {
      $: {
        type: "rfc",
        data: "rfc3175",
      },
    },
  },
  135: {
    value: "135",
    name: "Mobility Header",
    xref: {
      $: {
        type: "rfc",
        data: "rfc6275",
      },
    },
  },
  136: {
    value: "136",
    name: "UDPLite",
    xref: {
      $: {
        type: "rfc",
        data: "rfc3828",
      },
    },
  },
  137: {
    value: "137",
    name: "MPLS-in-IP",
    xref: {
      $: {
        type: "rfc",
        data: "rfc4023",
      },
    },
  },
  138: {
    value: "138",
    name: "manet",
    description: "MANET Protocols",
    xref: {
      $: {
        type: "rfc",
        data: "rfc5498",
      },
    },
  },
  139: {
    value: "139",
    name: "HIP",
    description: "Host Identity Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc5201",
      },
    },
  },
  140: {
    value: "140",
    name: "Shim6",
    description: "Shim6 Protocol",
    xref: {
      $: {
        type: "rfc",
        data: "rfc5533",
      },
    },
  },
  141: {
    value: "141",
    name: "WESP",
    description: "Wrapped Encapsulating Security Payload",
    xref: {
      $: {
        type: "rfc",
        data: "rfc5840",
      },
    },
  },
  142: {
    value: "142",
    name: "ROHC",
    description: "Robust Header Compression",
    xref: {
      $: {
        type: "rfc",
        data: "rfc5858",
      },
    },
  },
  253: {
    value: "253",
    description: "Use for experimentation and testing",
    xref: {
      $: {
        type: "rfc",
        data: "rfc3692",
      },
    },
  },
  254: {
    value: "254",
    description: "Use for experimentation and testing",
    xref: {
      $: {
        type: "rfc",
        data: "rfc3692",
      },
    },
  },
  255: {
    $: {
      date: "1995-06",
    },
    value: "255",
    name: "Reserved",
    xref: {
      $: {
        type: "person",
        data: "Internet_Assigned_Numbers_Authority",
      },
    },
  },
  "143-252": {
    $: {
      date: "1995-06",
    },
    value: "143-252",
    description: "Unassigned",
    xref: {
      $: {
        type: "person",
        data: "Internet_Assigned_Numbers_Authority",
      },
    },
  },
};
