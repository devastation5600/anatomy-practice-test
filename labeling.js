/* labeling.js — "Label the Diagrams" question bank.
   Drag-and-drop labeling exercises: a bank of term chips, and a list of
   description rows, each needing the correct term dropped into its slot.
   Works with a real mouse drag, or tap-to-select / tap-to-place (for phones
   and tablets, since native HTML5 drag doesn't work reliably on touch). */

const LABEL_QUESTIONS = [
  {
    id: 1,
    topic: "Nervous System Organization",
    prompt: "Drag each term into the box next to its matching description, building the nervous system's organization from the top down.",
    type: "dragdrop",
    zones: [
      { key: "cns", desc: "Made up of the brain and spinal cord — the body's control center.", correct: "Central Nervous System (CNS)" },
      { key: "pns", desc: "All the nerves that branch out from the CNS to the rest of the body.", correct: "Peripheral Nervous System (PNS)" },
      { key: "som", desc: "The division of the PNS that controls skeletal muscle — voluntary control.", correct: "Somatic Nervous System" },
      { key: "aut", desc: "The division of the PNS that controls involuntary effectors: heart, smooth muscle, and glands.", correct: "Autonomic Nervous System" },
      { key: "sym", desc: "The autonomic division that's \"fight or flight.\"", correct: "Sympathetic Division" },
      { key: "para", desc: "The autonomic division that's \"rest & digest.\"", correct: "Parasympathetic Division" }
    ],
    explanation: [
      "Top level: the nervous system splits into the Central Nervous System (CNS — brain + spinal cord) and the Peripheral Nervous System (PNS — everything branching out from it).",
      "The PNS splits into the Somatic Nervous System (voluntary, skeletal muscle) and the Autonomic Nervous System (involuntary, heart/smooth muscle/glands).",
      "The Autonomic Nervous System splits one more time into the Sympathetic Division (\"fight or flight\") and the Parasympathetic Division (\"rest & digest\")."
    ]
  },
  {
    id: 2,
    topic: "Neuron Structure",
    prompt: "Drag each term onto the description of that part of a neuron.",
    type: "dragdrop",
    zones: [
      { key: "dendrite", desc: "Branching extensions that receive signals and carry impulses TOWARD the cell body.", correct: "Dendrites" },
      { key: "cellbody", desc: "The main part of the neuron, containing the nucleus.", correct: "Cell Body (Soma)" },
      { key: "nucleus", desc: "The control center inside the cell body that holds the neuron's DNA.", correct: "Nucleus" },
      { key: "axon", desc: "The single extension that carries the impulse AWAY from the cell body.", correct: "Axon" },
      { key: "myelin", desc: "The fatty insulating layer wrapped around the axon that speeds up the impulse.", correct: "Myelin Sheath" },
      { key: "schwann", desc: "The cell in the PNS that produces the myelin sheath.", correct: "Schwann Cell" },
      { key: "node", desc: "A small gap between sections of myelin where the impulse \"jumps\" from node to node.", correct: "Node of Ranvier" }
    ],
    explanation: [
      "Dendrites receive signals and carry them toward the cell body; the axon carries the impulse away from it — opposite directions.",
      "The cell body (soma) houses the nucleus, the neuron's control center.",
      "The axon is wrapped in a myelin sheath, built by Schwann cells (in the PNS).",
      "The nodes of Ranvier are the gaps between myelin segments — the impulse jumps node to node, which speeds up conduction."
    ]
  },
  {
    id: 3,
    topic: "Brain Structures",
    prompt: "Drag each term onto the description of that brain structure.",
    type: "dragdrop",
    zones: [
      { key: "frontal", desc: "Controls voluntary muscle movement, concentration, planning, and problem solving.", correct: "Frontal Lobe" },
      { key: "parietal", desc: "Processes cutaneous (skin) and other senses; involved in understanding speech.", correct: "Parietal Lobe" },
      { key: "temporal", desc: "Interprets sensory experiences and stores the memory of visual/auditory patterns.", correct: "Temporal Lobe" },
      { key: "occipital", desc: "Combines visual images and handles visual recognition of objects.", correct: "Occipital Lobe" },
      { key: "cerebellum", desc: "Coordinates balance and smooth, precise movement.", correct: "Cerebellum" },
      { key: "brainstem", desc: "Connects the cerebrum to the spinal cord.", correct: "Brain Stem" },
      { key: "corpus", desc: "The bridge of nerve fibers connecting the left and right cerebral hemispheres.", correct: "Corpus Callosum" }
    ],
    explanation: [
      "Frontal lobe: voluntary movement, concentration, planning, problem solving (and Broca's area for speech production).",
      "Parietal lobe: skin/other sensory processing, understanding speech and language.",
      "Temporal lobe: interpreting sensory experience, memory of visual/auditory patterns (and Wernicke's area for speech comprehension).",
      "Occipital lobe: vision — combining images and recognizing objects.",
      "Cerebellum: balance and coordination.",
      "Brain stem: the connector between the cerebrum and the spinal cord.",
      "Corpus callosum: the bridge of fibers linking the two cerebral hemispheres."
    ]
  }
];
