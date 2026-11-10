/* cranial.js — "Cranial Nerves & Nerve Impulse" question bank.
   Covers nerve structure (endoneurium/perineurium/epineurium), all 12
   cranial nerves (name, sensory/motor/both, function), and the basics of
   how a nerve impulse travels (resting potential, depolarization,
   repolarization, saltatory conduction, synapse) — pulled from London's
   cranial nerve table/diagram and the broader "nerve impulse" unit she
   flagged as test material. */

const CRANIAL_QUESTIONS = [
  {
    id: 1,
    topic: "Nerve Structure",
    prompt: "The layer of connective tissue that surrounds each individual axon within a nerve is the:",
    type: "mc",
    choices: ["Epineurium", "Perineurium", "Endoneurium", "Myelin sheath"],
    correct: 2,
    distractorNotes: [
      "Epineurium is the OUTERMOST wrapping, around the whole nerve (all the fascicles bundled together) — too big a scale for a single axon.",
      "Perineurium wraps a fascicle (a bundle of axons), not a single axon.",
      "",
      "Myelin sheath is the fatty insulation on the axon itself, produced by Schwann cells — it's not a connective-tissue wrapping layer of the nerve."
    ],
    explanation: [
      "Nerve wrapping goes from the inside out: Endoneurium wraps each individual axon.",
      "Perineurium wraps a fascicle (a bundle of axons).",
      "Epineurium wraps the whole nerve (all the fascicles bundled together)."
    ]
  },
  {
    id: 2,
    topic: "Nerve Structure",
    prompt: "A bundle of axons grouped together within a nerve, wrapped in perineurium, is called a:",
    type: "mc",
    choices: ["Nerve", "Fascicle", "Ganglion", "Tract"],
    correct: 1,
    distractorNotes: [
      "A nerve is the larger structure — multiple fascicles bundled together and wrapped in epineurium.",
      "",
      "A ganglion is a cluster of neuron cell bodies in the PNS, not a bundle of axons.",
      "A tract is the CNS version of a bundle of axons (inside the brain/spinal cord) — \"fascicle\" is the PNS term."
    ],
    explanation: [
      "A fascicle is a bundle of axons, wrapped in perineurium.",
      "Multiple fascicles bundled together, wrapped in epineurium, make up a full nerve."
    ]
  },
  {
    id: 3,
    topic: "Nerve Structure",
    prompt: "What is the outermost layer of connective tissue, wrapping the entire nerve (all the fascicles bundled together)?",
    type: "mc",
    choices: ["Endoneurium", "Perineurium", "Epineurium", "Dura mater"],
    correct: 2,
    distractorNotes: [
      "Endoneurium is the innermost layer, around a single axon — the opposite end of the scale.",
      "Perineurium wraps one fascicle (a bundle of axons), one step smaller than the whole nerve.",
      "",
      "Dura mater is a meninges layer around the brain and spinal cord (CNS) — a different structure from peripheral nerve wrapping."
    ],
    explanation: [
      "Outside to inside, a peripheral nerve is wrapped in: Epineurium (whole nerve) → Perineurium (each fascicle) → Endoneurium (each individual axon)."
    ]
  },
  {
    id: 4,
    topic: "Nerve Structure",
    prompt: "Most nerves are described as \"generally bidirectional.\" What does that mean?",
    type: "mc",
    choices: [
      "They only carry sensory signals",
      "They only carry motor signals",
      "They carry both sensory and motor signals, depending on which fibers they contain",
      "They alternate direction every few seconds"
    ],
    correct: 2,
    distractorNotes: [
      "That would make it a purely sensory nerve — bidirectional means it carries both directions, not just one.",
      "That would make it a purely motor nerve — same issue, bidirectional means both directions.",
      "",
      "Direction depends on which fibers are carrying which signal, not on timing — it's not an alternating switch."
    ],
    explanation: [
      "This is the same idea as a \"mixed nerve\": a single nerve bundle usually contains both sensory fibers (carrying info TO the CNS) and motor fibers (carrying info AWAY from the CNS), so the nerve as a whole is bidirectional."
    ]
  },
  {
    id: 5,
    topic: "Cranial Nerves",
    prompt: "Which cranial nerve is responsible for the sense of smell?",
    type: "mc",
    choices: ["I — Olfactory", "II — Optic", "V — Trigeminal", "VIII — Vestibulocochlear"],
    correct: 0,
    distractorNotes: [
      "",
      "Optic (II) handles vision, not smell.",
      "Trigeminal (V) handles facial sensation and chewing, not smell.",
      "Vestibulocochlear (VIII) handles hearing and balance, not smell."
    ],
    explanation: [
      "Cranial nerve I, the Olfactory nerve, is purely sensory and handles smell."
    ]
  },
  {
    id: 6,
    topic: "Cranial Nerves",
    prompt: "Which cranial nerve is responsible for vision?",
    type: "mc",
    choices: ["I — Olfactory", "II — Optic", "III — Oculomotor", "VII — Facial"],
    correct: 1,
    distractorNotes: [
      "Olfactory (I) handles smell, not vision.",
      "",
      "Oculomotor (III) MOVES the eye — it doesn't carry the visual image itself, that's Optic (II).",
      "Facial (VII) handles facial expression and taste, not vision."
    ],
    explanation: [
      "Cranial nerve II, the Optic nerve, is purely sensory and carries visual information from the eye to the brain."
    ]
  },
  {
    id: 7,
    topic: "Cranial Nerves",
    prompt: "Cranial nerve II is called the ___ nerve.",
    type: "mc",
    choices: ["Optic", "Olfactory", "Oculomotor", "Ophthalmic"],
    correct: 0,
    distractorNotes: [
      "",
      "Olfactory is cranial nerve I (smell), not II.",
      "Oculomotor is cranial nerve III (eye movement) — a different nerve, even though the names sound similar.",
      "\"Ophthalmic\" isn't one of the 12 cranial nerve names."
    ],
    explanation: [
      "Cranial nerve II is the Optic nerve — purely sensory, carrying vision."
    ]
  },
  {
    id: 8,
    topic: "Cranial Nerves — Eye Movement",
    prompt: "Which THREE cranial nerves control eye movement?",
    type: "multi",
    choices: ["Oculomotor (III)", "Optic (II)", "Trochlear (IV)", "Facial (VII)", "Abducens (VI)"],
    correctSet: [0, 2, 4],
    distractorNotes: [
      "",
      "Optic (II) is purely sensory — it only carries visual information TO the brain, it doesn't move the eye muscles.",
      "",
      "Facial (VII) controls the muscles of facial expression and taste, not eye movement.",
      ""
    ],
    explanation: [
      "Three cranial nerves control eye movement: Oculomotor (III), Trochlear (IV), and Abducens (VI).",
      "Oculomotor (III) also controls pupil constriction and eyelid elevation.",
      "Optic (II) is a completely different nerve — it's purely sensory, carrying visual information from the eye to the brain, not controlling the eye muscles."
    ]
  },
  {
    id: 9,
    topic: "Cranial Nerves",
    prompt: "Which cranial nerve handles sensation in the skin of the face and head AND the muscles used for chewing (mastication)? It's classified as carrying BOTH sensory and motor fibers.",
    type: "mc",
    choices: ["V — Trigeminal", "VII — Facial", "III — Oculomotor", "X — Vagus"],
    correct: 0,
    distractorNotes: [
      "",
      "Facial (VII) controls facial expression muscles and taste, not facial skin sensation or chewing.",
      "Oculomotor (III) is purely motor, controlling eye movement — not facial sensation or chewing.",
      "Vagus (X) is \"both\" too, but it's about visceral organs (heart, lungs, digestive tract), not facial sensation or chewing."
    ],
    explanation: [
      "Cranial nerve V, the Trigeminal nerve, is classified as \"both\" — it carries sensation from the skin of the face and head, and it controls the muscles used for chewing (mastication)."
    ]
  },
  {
    id: 10,
    topic: "Cranial Nerves",
    prompt: "Which cranial nerve controls the muscles of facial expression and also carries taste sensation from the front of the tongue?",
    type: "mc",
    choices: ["V — Trigeminal", "VII — Facial", "IX — Glossopharyngeal", "XII — Hypoglossal"],
    correct: 1,
    distractorNotes: [
      "Trigeminal (V) handles facial SKIN sensation and chewing muscles — a different job than facial expression and taste.",
      "",
      "Glossopharyngeal (IX) handles taste and sensation from the BACK of the tongue, plus swallowing — not facial expression.",
      "Hypoglossal (XII) is purely motor, controlling tongue movement — not facial expression or taste."
    ],
    explanation: [
      "Cranial nerve VII, the Facial nerve, is classified as \"both\" — it controls the muscles of facial expression and carries taste sensation from the front of the tongue."
    ]
  },
  {
    id: 11,
    topic: "Cranial Nerves",
    prompt: "Cranial nerve VIII is called the ___ nerve, and handles hearing and balance.",
    type: "mc",
    choices: ["Vestibulocochlear", "Glossopharyngeal", "Trigeminal", "Facial"],
    correct: 0,
    distractorNotes: [
      "",
      "Glossopharyngeal is cranial nerve IX (taste, swallowing), not VIII.",
      "Trigeminal is cranial nerve V (facial sensation, chewing), not VIII.",
      "Facial is cranial nerve VII (facial expression, taste), not VIII."
    ],
    explanation: [
      "Cranial nerve VIII, the Vestibulocochlear nerve, is purely sensory and handles hearing and balance (the inner ear)."
    ]
  },
  {
    id: 12,
    topic: "Cranial Nerves",
    prompt: "Which cranial nerve handles taste and sensation from the back of the tongue, plus swallowing?",
    type: "mc",
    choices: ["VII — Facial", "IX — Glossopharyngeal", "X — Vagus", "XII — Hypoglossal"],
    correct: 1,
    distractorNotes: [
      "Facial (VII) handles taste from the FRONT of the tongue, not the back.",
      "",
      "Vagus (X) is also involved in swallowing and some taste, but its main job is visceral sensation/motor control of organs like the heart, lungs, and digestive tract.",
      "Hypoglossal (XII) is purely motor, controlling tongue MOVEMENT — not taste or sensation."
    ],
    explanation: [
      "Cranial nerve IX, the Glossopharyngeal nerve, is classified as \"both\" — it handles taste and sensation from the back of the tongue and throat, and is involved in swallowing."
    ]
  },
  {
    id: 13,
    topic: "Cranial Nerves",
    prompt: "Which cranial nerve carries visceral sensory and motor signals to and from organs like the heart, lungs, and digestive tract (plus some taste and swallowing)?",
    type: "mc",
    choices: ["IX — Glossopharyngeal", "X — Vagus", "XI — Accessory", "III — Oculomotor"],
    correct: 1,
    distractorNotes: [
      "Glossopharyngeal (IX) is also \"both,\" but its focus is the back of the tongue and swallowing, not the organs of the chest and abdomen.",
      "",
      "Accessory (XI) is purely motor, controlling head/neck/shoulder movement — not visceral organs.",
      "Oculomotor (III) is purely motor, controlling eye movement — not visceral organs."
    ],
    explanation: [
      "Cranial nerve X, the Vagus nerve, is classified as \"both\" and has the widest reach of all the cranial nerves — it carries visceral sensory and motor signals to organs like the heart, lungs, and digestive tract, plus some taste and swallowing function."
    ]
  },
  {
    id: 14,
    topic: "Cranial Nerves",
    prompt: "Which cranial nerve controls movement of the head, neck, and shoulders?",
    type: "mc",
    choices: ["X — Vagus", "XI — Accessory", "XII — Hypoglossal", "VII — Facial"],
    correct: 1,
    distractorNotes: [
      "Vagus (X) is about visceral organs, not head/neck/shoulder movement.",
      "",
      "Hypoglossal (XII) controls the TONGUE, not the head/neck/shoulders.",
      "Facial (VII) controls facial expression, not head/neck/shoulder movement."
    ],
    explanation: [
      "Cranial nerve XI, the Accessory nerve, is purely motor and controls movement of the head, neck, and shoulders."
    ]
  },
  {
    id: 15,
    topic: "Cranial Nerves",
    prompt: "Cranial nerve XII is called the ___ nerve, and controls movement of the tongue.",
    type: "mc",
    choices: ["Hypoglossal", "Glossopharyngeal", "Vagus", "Accessory"],
    correct: 0,
    distractorNotes: [
      "",
      "Glossopharyngeal (IX) handles taste/sensation and swallowing — it's \"both,\" not purely motor like Hypoglossal.",
      "Vagus (X) is about visceral organs, not tongue movement.",
      "Accessory (XI) controls head/neck/shoulder movement, not the tongue."
    ],
    explanation: [
      "Cranial nerve XII, the Hypoglossal nerve, is purely motor and controls movement of the tongue."
    ]
  },
  {
    id: 16,
    topic: "Cranial Nerves — Both Sensory & Motor",
    prompt: "Which FOUR cranial nerves are classified as carrying BOTH sensory and motor fibers (not purely one or the other)?",
    type: "multi",
    choices: ["Trigeminal (V)", "Optic (II)", "Facial (VII)", "Accessory (XI)", "Glossopharyngeal (IX)", "Vagus (X)"],
    correctSet: [0, 2, 4, 5],
    distractorNotes: [
      "",
      "Optic (II) is purely sensory — it only carries visual information, no motor fibers.",
      "",
      "Accessory (XI) is purely motor — it controls head/neck/shoulder movement, no sensory fibers.",
      "",
      ""
    ],
    explanation: [
      "Four cranial nerves carry BOTH sensory and motor fibers: Trigeminal (V), Facial (VII), Glossopharyngeal (IX), and Vagus (X).",
      "The rest are purely sensory (Olfactory I, Optic II, Vestibulocochlear VIII) or purely motor (Oculomotor III, Trochlear IV, Abducens VI, Accessory XI, Hypoglossal XII)."
    ]
  },
  {
    id: 17,
    topic: "Nerve Impulse",
    prompt: "At rest, the inside of a neuron is more negative than the outside. This resting, not-yet-firing state is called the:",
    type: "mc",
    choices: ["Action potential", "Resting membrane potential", "Synapse", "Refractory period"],
    correct: 1,
    distractorNotes: [
      "An action potential is the actual nerve impulse firing — the opposite of the resting state.",
      "",
      "A synapse is the gap between two neurons, not a membrane voltage state.",
      "The refractory period is the brief recovery window right after a neuron fires, before it can fire again — not the baseline resting state."
    ],
    explanation: [
      "A neuron at rest keeps the inside of its membrane more negative than the outside — this baseline is the resting membrane potential.",
      "This sets up the neuron so it's \"ready to fire\" once a strong enough signal arrives."
    ]
  },
  {
    id: 18,
    topic: "Nerve Impulse",
    prompt: "When a stimulus is strong enough to reach threshold, sodium (Na⁺) channels open and sodium rushes into the cell, making the inside suddenly positive. This step is called:",
    type: "mc",
    choices: ["Repolarization", "Hyperpolarization", "Depolarization", "Resting potential"],
    correct: 2,
    distractorNotes: [
      "Repolarization is the NEXT step, where the cell goes back toward negative — the opposite direction.",
      "Hyperpolarization is when the inside becomes even MORE negative than resting — not what's happening here.",
      "",
      "Resting potential is the baseline BEFORE this happens, when the inside is still negative."
    ],
    explanation: [
      "Depolarization: once a stimulus reaches threshold, voltage-gated sodium (Na⁺) channels open, sodium rushes INTO the cell, and the inside of the membrane flips from negative to positive.",
      "This positive spike is the actual nerve impulse (action potential) moving down the axon."
    ]
  },
  {
    id: 19,
    topic: "Nerve Impulse",
    prompt: "After depolarization, potassium (K⁺) channels open and potassium rushes out of the cell, bringing the inside back toward negative. This step is called:",
    type: "mc",
    choices: ["Depolarization", "Repolarization", "Threshold", "Synapse"],
    correct: 1,
    distractorNotes: [
      "Depolarization is the PREVIOUS step, where the inside flips from negative to positive — the opposite direction of what's described here.",
      "",
      "Threshold is the voltage level that has to be reached to trigger depolarization in the first place, not this recovery step.",
      "A synapse is the gap between two neurons, not a step in a single neuron's membrane voltage change."
    ],
    explanation: [
      "Repolarization: potassium (K⁺) channels open and potassium rushes OUT of the cell, bringing the inside of the membrane back toward negative.",
      "This resets the neuron so it can fire again."
    ]
  },
  {
    id: 20,
    topic: "Nerve Impulse",
    prompt: "Myelinated axons conduct impulses much faster than unmyelinated ones because the impulse can \"jump\" from node to node instead of traveling continuously down the membrane. This is called:",
    type: "mc",
    choices: ["Saltatory conduction", "Synaptic transmission", "Resting conduction", "Reflex conduction"],
    correct: 0,
    distractorNotes: [
      "",
      "Synaptic transmission is how the signal crosses the gap BETWEEN two neurons, not how it travels down one axon.",
      "\"Resting conduction\" isn't a real term — the resting state is when nothing is being conducted yet.",
      "\"Reflex conduction\" isn't the term for this — reflexes are a type of fast response pathway, not this specific jumping mechanism."
    ],
    explanation: [
      "Myelin wraps the axon in segments, with small gaps (nodes of Ranvier) between them.",
      "Instead of depolarizing continuously along the whole membrane, the impulse jumps from node to node — this is saltatory conduction, and it's much faster than conduction along an unmyelinated axon."
    ]
  },
  {
    id: 21,
    topic: "Nerve Impulse",
    prompt: "The tiny gap between two neurons, where a neurotransmitter carries the signal from one neuron to the next, is called the:",
    type: "mc",
    choices: ["Node of Ranvier", "Synapse", "Endoneurium", "Myelin sheath"],
    correct: 1,
    distractorNotes: [
      "A node of Ranvier is a gap in the MYELIN along a single axon — a different kind of gap than the one between two neurons.",
      "",
      "Endoneurium is a connective-tissue wrapping around a single axon, not a gap between neurons.",
      "The myelin sheath is insulation on the axon, not the junction between two neurons."
    ],
    explanation: [
      "A synapse is the small gap between the end of one neuron's axon and the next neuron (or a muscle/gland).",
      "When the impulse reaches the end of the axon, it triggers the release of a neurotransmitter, which crosses the synapse and passes the signal along."
    ]
  }
];
