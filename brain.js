/* brain.js — "Brain Anatomy & Histology" question bank.
   Covers the meninges, cerebrum structures, the four lobes and their
   functions, Broca's & Wernicke's areas, neuron structure, and neuron
   types — pulled from the Brain & Spinal Cord Notes and the Nervous
   System Histology Notes worksheets. */

const BRAIN_QUESTIONS = [
  {
    id: 1,
    topic: "Meninges",
    prompt: "Put the three meninges layers in order from most superficial (closest to the skull) to deepest (closest to the brain tissue).",
    type: "mc",
    choices: [
      "Pia mater → Arachnoid mater → Dura mater",
      "Dura mater → Arachnoid mater → Pia mater",
      "Arachnoid mater → Dura mater → Pia mater",
      "Dura mater → Pia mater → Arachnoid mater"
    ],
    correct: 1,
    distractorNotes: [
      "This is the order reversed — pia mater is actually the deepest layer, not the most superficial.",
      "",
      "Dura mater is the outermost layer, so it has to come first, not second.",
      "Arachnoid mater sits in the middle, between dura and pia — not last."
    ],
    explanation: [
      "Meninges are the layered membranes between the bony coverings (skull/vertebrae) and the soft tissue of the brain and spinal cord.",
      "Order from outside to inside: Dura mater (toughest, outermost, many blood vessels) → Arachnoid mater (thin, web-like, middle) → Pia mater (deepest, very thin, nourishes the CNS directly)."
    ]
  },
  {
    id: 2,
    topic: "Meninges",
    prompt: "Which meninge layer is the most superficial — tough, white, fibrous connective tissue with many blood vessels?",
    type: "mc",
    choices: ["Dura mater", "Arachnoid mater", "Pia mater", "Corpus callosum"],
    correct: 0,
    distractorNotes: [
      "",
      "Arachnoid mater is the thin, web-like middle layer with no blood vessels — not the tough outer one.",
      "Pia mater is the deepest, most delicate layer — the opposite of \"most superficial.\"",
      "The corpus callosum isn't a meninge at all — it's a bridge of nerve fibers inside the brain."
    ],
    explanation: [
      "Dura mater is the most superficial of the three meninges layers.",
      "It's tough, white, fibrous connective tissue, and it has many blood vessels running through it."
    ]
  },
  {
    id: 3,
    topic: "Meninges",
    prompt: "Which meninge layer is thin, web-like in structure, and has NO blood vessels of its own?",
    type: "mc",
    choices: ["Dura mater", "Arachnoid mater", "Pia mater", "Gray matter"],
    correct: 1,
    distractorNotes: [
      "Dura mater is the tough outer layer with many blood vessels — opposite of this description.",
      "",
      "Pia mater does contain many blood vessels (it nourishes the brain directly) — this description fits the arachnoid mater instead.",
      "Gray matter is brain/spinal cord tissue, not a meninge layer at all."
    ],
    explanation: [
      "Arachnoid mater sits in the middle of the three meninges layers.",
      "It's thin and web-like (hence \"arachnoid,\" like a spider's web) and has no blood vessels of its own."
    ]
  },
  {
    id: 4,
    topic: "Meninges",
    prompt: "Which meninge layer is the deepest, very thin, and contains many nerves and blood vessels that nourish the cells of the brain and spinal cord?",
    type: "mc",
    choices: ["Dura mater", "Arachnoid mater", "Pia mater", "Neurilemma"],
    correct: 2,
    distractorNotes: [
      "Dura mater is the outermost layer, not the deepest.",
      "Arachnoid mater sits in the middle and has no blood vessels — the opposite of this description.",
      "",
      "Neurilemma is part of a neuron's structure (the Schwann cell layer around an axon), not a meninge."
    ],
    explanation: [
      "Pia mater is the deepest, most delicate meninge layer.",
      "It's very thin but packed with nerves and blood vessels that directly nourish the cells of the brain and spinal cord."
    ]
  },
  {
    id: 5,
    topic: "Brain Anatomy",
    prompt: "The corpus callosum is:",
    type: "mc",
    choices: [
      "The large main portion of the brain",
      "A bridge of nerve fibers connecting the left and right cerebral hemispheres",
      "A shallow groove on the surface of the brain",
      "The bundle of nervous tissue connecting the cerebrum to the spinal cord"
    ],
    correct: 1,
    distractorNotes: [
      "That description fits the cerebrum itself, not the corpus callosum.",
      "",
      "A shallow groove is a sulcus, not the corpus callosum.",
      "That's the brain stem's job — it connects the cerebrum to the spinal cord."
    ],
    explanation: [
      "The corpus callosum is a bridge of nerve fibers that connects the two cerebral hemispheres (left and right halves of the cerebrum), letting them communicate with each other."
    ]
  },
  {
    id: 6,
    topic: "Brain Anatomy",
    prompt: "A gyrus is a ridge on the brain's surface, and a sulcus is a shallow groove. What is a fissure?",
    type: "mc",
    choices: [
      "A blood vessel supplying the brain",
      "A deep groove on the brain's surface",
      "A type of neuron",
      "One of the three meninges layers"
    ],
    correct: 1,
    distractorNotes: [
      "A blood vessel isn't a surface feature of brain tissue — this is about the brain's folded shape.",
      "",
      "Fissure refers to brain surface anatomy, not a cell type.",
      "The three meninges are dura, arachnoid, and pia mater — fissure isn't one of them."
    ],
    explanation: [
      "Gyrus = a ridge (the raised, bumped-up part of the folded brain surface).",
      "Sulcus = a shallow groove between gyri.",
      "Fissure = a DEEP groove — basically a more dramatic sulcus."
    ]
  },
  {
    id: 7,
    topic: "Brain Anatomy",
    prompt: "What is the brain stem's job?",
    type: "mc",
    choices: [
      "Store long-term memories",
      "Connect the cerebrum to the spinal cord",
      "Interpret visual images",
      "Control voluntary skeletal muscle movement"
    ],
    correct: 1,
    distractorNotes: [
      "Long-term memory involves structures deeper in the cerebrum, not the brain stem.",
      "",
      "Interpreting visual images is the occipital lobe's job.",
      "Voluntary muscle control is run by the frontal lobe (motor areas), not the brain stem."
    ],
    explanation: [
      "The brain stem is a bundle of nervous tissue connecting the cerebrum to the spinal cord.",
      "It's the pathway everything going between the brain and the rest of the body has to pass through."
    ]
  },
  {
    id: 8,
    topic: "Brain Anatomy",
    prompt: "What is the major portion of the brain called?",
    type: "mc",
    choices: ["Cerebellum", "Brain stem", "Cerebrum", "Medulla"],
    correct: 2,
    distractorNotes: [
      "The cerebellum is a separate, smaller structure at the back of the brain, mainly for balance/coordination — not the major portion.",
      "The brain stem is the connector between the cerebrum and spinal cord, not the main bulk of the brain.",
      "",
      "The medulla is a small structure within the brain stem, not the major portion of the brain."
    ],
    explanation: [
      "The cerebrum is the large portion of the brain — it's divided into left and right cerebral hemispheres connected by the corpus callosum."
    ]
  },
  {
    id: 9,
    topic: "Lobes & Function",
    prompt: "Which lobe controls voluntary muscle movement, and is also responsible for concentration, planning, and problem solving?",
    type: "mc",
    choices: ["Parietal lobe", "Temporal lobe", "Frontal lobe", "Occipital lobe"],
    correct: 2,
    distractorNotes: [
      "Parietal lobe handles sensory information from the skin and understanding speech, not voluntary movement.",
      "Temporal lobe handles interpreting sensory experiences and memory, not voluntary movement.",
      "",
      "Occipital lobe handles vision, not voluntary movement."
    ],
    explanation: [
      "The frontal lobe is at the front of the brain.",
      "It contains the motor areas that control voluntary skeletal muscle, and it's also where concentration, planning, and problem solving happen."
    ]
  },
  {
    id: 10,
    topic: "Lobes & Function",
    prompt: "Which lobe contains sensory areas for cutaneous (skin) and other senses, and is involved in understanding speech and using words?",
    type: "mc",
    choices: ["Frontal lobe", "Parietal lobe", "Occipital lobe", "Cerebellum"],
    correct: 1,
    distractorNotes: [
      "The frontal lobe handles voluntary movement and planning, not cutaneous sensation.",
      "",
      "The occipital lobe is dedicated to vision, not skin sensation or speech understanding.",
      "The cerebellum handles balance/coordination, not sensory processing or speech."
    ],
    explanation: [
      "The parietal lobe sits behind the frontal lobe, across the central sulcus.",
      "It processes sensory input from the skin and other senses, and is involved in understanding speech and language."
    ]
  },
  {
    id: 11,
    topic: "Lobes & Function",
    prompt: "Which lobe is responsible for interpreting sensory experiences and holds the memory of visual and auditory patterns?",
    type: "mc",
    choices: ["Frontal lobe", "Parietal lobe", "Temporal lobe", "Occipital lobe"],
    correct: 2,
    distractorNotes: [
      "Frontal lobe is about movement and planning, not interpreting sensory experience/memory.",
      "Parietal lobe handles cutaneous sensation and speech understanding, a different job than this one.",
      "",
      "Occipital lobe is specifically for vision, not general sensory interpretation and memory."
    ],
    explanation: [
      "The temporal lobe sits roughly at ear-level on the side of the brain.",
      "It interprets sensory experiences and stores the memory of visual and auditory patterns — part of why it's closely tied to recognizing faces, sounds, and language."
    ]
  },
  {
    id: 12,
    topic: "Lobes & Function",
    prompt: "Which lobe's main job is combining visual images and recognizing objects visually?",
    type: "mc",
    choices: ["Frontal lobe", "Parietal lobe", "Temporal lobe", "Occipital lobe"],
    correct: 3,
    distractorNotes: [
      "Frontal lobe is for voluntary movement and planning.",
      "Parietal lobe handles skin sensation and speech understanding.",
      "Temporal lobe handles general sensory interpretation and memory, not the core visual-processing job.",
      ""
    ],
    explanation: [
      "The occipital lobe is at the very back of the brain.",
      "Its main job is combining visual images and visual recognition of objects — the brain's main vision-processing center."
    ]
  },
  {
    id: 13,
    topic: "Lobes & Function",
    prompt: "What is the main job of the cerebellum, the structure tucked below the occipital lobe near the back of the brain?",
    type: "mc",
    choices: [
      "Balance and coordination",
      "Voluntary muscle control",
      "Processing speech sounds",
      "Regulating heart rate directly"
    ],
    correct: 0,
    distractorNotes: [
      "",
      "Voluntary muscle control is the frontal lobe's job (motor areas).",
      "Speech-sound processing happens more in the temporal lobe / speech areas.",
      "Heart rate is regulated by the autonomic nervous system and brain stem, not the cerebellum."
    ],
    explanation: [
      "The cerebellum sits below the occipital lobe, just above the brain stem.",
      "Its main role is coordinating balance and smooth, precise movement."
    ]
  },
  {
    id: 14,
    topic: "Speech Areas",
    prompt: "Broca's area, which controls the physical, motor production of speech, is located in which lobe?",
    type: "mc",
    choices: ["Parietal lobe", "Temporal lobe", "Frontal lobe", "Occipital lobe"],
    correct: 2,
    distractorNotes: [
      "Parietal lobe is where sensory/speech-understanding processing happens, not speech production.",
      "Temporal lobe is close to Wernicke's area (speech comprehension), but Broca's is in the frontal lobe.",
      "",
      "Occipital lobe is for vision, unrelated to speech production."
    ],
    explanation: [
      "Broca's area is a motor speech area, so it fits with the rest of the frontal lobe's job: controlling voluntary muscle movement — in this case, the muscles that physically produce speech."
    ]
  },
  {
    id: 15,
    topic: "Speech Areas",
    prompt: "Wernicke's area, the sensory speech area responsible for understanding language, is located in which lobe?",
    type: "mc",
    choices: ["Frontal lobe", "Parietal lobe", "Occipital lobe", "Temporal lobe"],
    correct: 3,
    distractorNotes: [
      "The frontal lobe houses Broca's area (speech production), not Wernicke's.",
      "The parietal lobe handles general sensory processing and sits close to Wernicke's area, but Wernicke's area itself is in the temporal lobe.",
      "The occipital lobe is dedicated to vision, unrelated to language comprehension.",
      ""
    ],
    explanation: [
      "Wernicke's area is a sensory speech area — it's what lets you understand words and language.",
      "It sits in the temporal lobe, near where auditory and language processing already happen."
    ]
  },
  {
    id: 16,
    topic: "Neuron Structure",
    prompt: "The branching extensions of a neuron that receive signals and carry impulses TOWARD the cell body are called:",
    type: "mc",
    choices: ["Axons", "Dendrites", "Neuroglia", "Myelin sheaths"],
    correct: 1,
    distractorNotes: [
      "Axons carry impulses AWAY from the cell body — the opposite direction.",
      "",
      "Neuroglia are support cells for neurons, not the signal-receiving branches.",
      "Myelin sheath is the fatty insulation around an axon, not a signal-receiving structure."
    ],
    explanation: [
      "Dendrites are the branching extensions off the cell body.",
      "Their job is to receive incoming signals and carry the impulse TOWARD the cell body.",
      "Axons do the opposite: a single extension carrying the impulse AWAY from the cell body."
    ]
  },
  {
    id: 17,
    topic: "Neuron Structure",
    prompt: "The fatty, insulating covering wrapped around many axons — produced by Schwann cells in the PNS — is called the:",
    type: "mc",
    choices: ["Myelin sheath", "Neurilemma", "Node of Ranvier", "Dendrite"],
    correct: 0,
    distractorNotes: [
      "",
      "Neurilemma is the outer layer of the Schwann cell itself, wrapping around the myelin — close, but it's the wrapping layer, not the fatty insulation.",
      "A node of Ranvier is a gap BETWEEN sections of myelin, not the insulation itself.",
      "Dendrites are signal-receiving branches, unrelated to insulation."
    ],
    explanation: [
      "The myelin sheath is the fatty insulating layer wrapped around the axon.",
      "It's built by Schwann cells (in the PNS) and speeds up how fast the nerve impulse travels down the axon.",
      "The nodes of Ranvier are the small gaps between segments of myelin — the impulse actually \"jumps\" node to node, which is part of why myelinated axons conduct faster."
    ]
  },
  {
    id: 18,
    topic: "Neuron Types",
    prompt: "A neuron with one axon and many branching dendrites off the cell body — the most common type, found throughout the brain and spinal cord — is called:",
    type: "mc",
    choices: ["Unipolar", "Bipolar", "Multipolar", "Mixed"],
    correct: 2,
    distractorNotes: [
      "Unipolar neurons have a single process that splits into two branches — a different shape from this description.",
      "Bipolar neurons have exactly two processes (one dendrite side, one axon side) — this question describes many dendrites, not two.",
      "",
      "\"Mixed\" describes a type of nerve (carrying both sensory and motor fibers), not a shape of neuron."
    ],
    explanation: [
      "Multipolar neurons have one axon and many dendrites — this is the most common neuron shape, found throughout the CNS.",
      "Bipolar neurons have two processes total.",
      "Unipolar neurons have a single process that splits into two branches near the cell body."
    ]
  },
  {
    id: 19,
    topic: "Reflexes & Funny Bone",
    prompt: "When you hit your \"funny bone\" at the elbow, the tingling and pain happen because you actually hit:",
    type: "mc",
    choices: [
      "A bone that has no nerves nearby",
      "The ulnar nerve, which runs very close to the skin's surface at the elbow",
      "Your spinal cord directly",
      "The corpus callosum"
    ],
    correct: 1,
    distractorNotes: [
      "There IS a nerve very close to the surface right there — that's exactly why it's so sensitive.",
      "",
      "The spinal cord is deep inside the vertebral column — the elbow is nowhere near it.",
      "The corpus callosum is a bridge of fibers inside the brain, nowhere near the elbow."
    ],
    explanation: [
      "\"Hitting your funny bone\" isn't really about a bone at all — it's about the ulnar nerve.",
      "At the elbow, the ulnar nerve passes close to the skin's surface with very little muscle or fat protecting it.",
      "A direct hit compresses the nerve against bone, firing off a burst of sensory impulses — that's the tingly, electric feeling, and it can radiate down into the hand/fingers because that's where the ulnar nerve travels next."
    ]
  },
  {
    id: 20,
    topic: "Nerve Damage",
    prompt: "Why is damage to nerve tissue generally more serious than damage to tissues like skin or muscle?",
    type: "mc",
    choices: [
      "Nerve cells generally don't repair or regenerate as readily as other tissues, so the damage can be permanent",
      "Nerves are the smallest tissue type in the body, so damage barely matters",
      "Nerve tissue doesn't carry any important information",
      "Nerves heal faster than skin or muscle"
    ],
    correct: 0,
    distractorNotes: [
      "",
      "Size isn't the reason — plenty of small structures aren't especially dangerous to damage. The issue is regeneration, not size.",
      "Nerves carry the most critical information in the body — signals between the brain, spinal cord, and everything else.",
      "It's the opposite — skin and muscle generally repair faster and more completely than nerve tissue."
    ],
    explanation: [
      "Skin and muscle cells can regenerate relatively well after an injury.",
      "Nerve cells (neurons), especially in the CNS, have a much more limited ability to repair or regrow once damaged.",
      "Since nerves carry essential sensory and motor information, damage that doesn't heal can mean permanent loss of sensation or movement — that's why nerve injuries are treated as more serious."
    ]
  }
];
