/* memorytricks.js — "Memory Tricks" reference bank.
   Not graded — these are mnemonics, abbreviations, and homophone tricks
   covering the trickiest things to memorize across the whole site: the
   order of the 12 cranial nerves, sensory/motor/both, and the other
   commonly-confused pairs (CNS/PNS, sympathetic/parasympathetic, gray vs.
   white matter, meninges order, neuron types, ascending vs. descending). */

const MEMORY_TRICKS = [
  {
    id: 1,
    topic: "12 Cranial Nerves — The Order",
    type: "note",
    prompt: "The classic mnemonic for the order of all 12 cranial nerves (I&ndash;XII):",
    points: [
      "&ldquo;<strong>On Old Olympus&rsquo; Towering Top, A Finn And German Viewed Some Hops</strong>&rdquo;",
      "<strong>On</strong> = <strong>O</strong>lfactory (I)",
      "<strong>Old</strong> = <strong>O</strong>ptic (II)",
      "<strong>Olympus&rsquo;</strong> = <strong>O</strong>culomotor (III)",
      "<strong>Towering</strong> = <strong>T</strong>rochlear (IV)",
      "<strong>Top</strong> = <strong>T</strong>rigeminal (V)",
      "<strong>A</strong> = <strong>A</strong>bducens (VI)",
      "<strong>Finn</strong> = <strong>F</strong>acial (VII)",
      "<strong>And</strong> = <strong>A</strong>uditory &mdash; the old name for Vestibulocochlear (VIII)",
      "<strong>German</strong> = <strong>G</strong>lossopharyngeal (IX)",
      "<strong>Viewed</strong> = <strong>V</strong>agus (X)",
      "<strong>Some</strong> = <strong>S</strong>pinal Accessory &mdash; just called Accessory on her worksheet (XI)",
      "<strong>Hops</strong> = <strong>H</strong>ypoglossal (XII)"
    ]
  },
  {
    id: 2,
    topic: "12 Cranial Nerves — Sensory, Motor, or Both",
    type: "note",
    prompt: "The classic mnemonic for whether each nerve is Sensory, Motor, or Both &mdash; in the exact same I&ndash;XII order as the mnemonic above:",
    points: [
      "&ldquo;<strong>Some Say Marry Money But My Brother Says Big Brains Matter More</strong>&rdquo;",
      "<strong>Some</strong> = <strong>S</strong>ensory &mdash; Olfactory (I)",
      "<strong>Say</strong> = <strong>S</strong>ensory &mdash; Optic (II)",
      "<strong>Marry</strong> = <strong>M</strong>otor &mdash; Oculomotor (III)",
      "<strong>Money</strong> = <strong>M</strong>otor &mdash; Trochlear (IV)",
      "<strong>But</strong> = <strong>B</strong>oth &mdash; Trigeminal (V)",
      "<strong>My</strong> = <strong>M</strong>otor &mdash; Abducens (VI)",
      "<strong>Brother</strong> = <strong>B</strong>oth &mdash; Facial (VII)",
      "<strong>Says</strong> = <strong>S</strong>ensory &mdash; Vestibulocochlear (VIII)",
      "<strong>Big</strong> = <strong>B</strong>oth &mdash; Glossopharyngeal (IX)",
      "<strong>Brains</strong> = <strong>B</strong>oth &mdash; Vagus (X)",
      "<strong>Matter</strong> = <strong>M</strong>otor &mdash; Accessory (XI)",
      "<strong>More</strong> = <strong>M</strong>otor &mdash; Hypoglossal (XII)"
    ]
  },
  {
    id: 3,
    topic: "Abducens (CN VI) &mdash; homophone trick",
    type: "note",
    prompt: "Easy way to remember what the Abducens nerve does:",
    points: [
      "&ldquo;Abducens&rdquo; sounds like &ldquo;<strong>ABDUCT</strong>.&rdquo;",
      "This nerve <strong>ABDUCTS</strong> the eye &mdash; pulls it outward, away from the nose. It's literally built into the name."
    ]
  },
  {
    id: 4,
    topic: "Trochlear (CN IV) &mdash; picture trick",
    type: "note",
    prompt: "Easy way to remember the Trochlear nerve:",
    points: [
      "A &ldquo;trochlea&rdquo; is the actual anatomical word for a <strong>pulley</strong>.",
      "This nerve runs a muscle that works like a pulley system to roll the eye down and inward &mdash; picture a tiny pulley steering your eyeball."
    ]
  },
  {
    id: 5,
    topic: "Hypoglossal (CN XII) &mdash; word-parts trick",
    type: "note",
    prompt: "Easy way to remember the Hypoglossal nerve:",
    points: [
      "<strong>Hypo-</strong> = under / below (like &ldquo;hypothermia&rdquo; = below-normal temperature).",
      "<strong>-glossal</strong> = tongue (like &ldquo;glossary&rdquo;, a list of words).",
      "Hypoglossal = &ldquo;under the tongue&rdquo; &mdash; the nerve that moves your tongue."
    ]
  },
  {
    id: 6,
    topic: "Glossopharyngeal (CN IX) &mdash; word-parts trick",
    type: "note",
    prompt: "Easy way to remember the Glossopharyngeal nerve:",
    points: [
      "<strong>Glosso-</strong> = tongue.",
      "<strong>-pharyngeal</strong> = throat (the pharynx).",
      "Glossopharyngeal = tongue + throat &mdash; taste on the back of the tongue, plus swallowing."
    ]
  },
  {
    id: 7,
    topic: "Vagus (CN X) &mdash; homophone trick",
    type: "note",
    prompt: "Easy way to remember the Vagus nerve:",
    points: [
      "&ldquo;Vagus&rdquo; sounds like &ldquo;<strong>VOYAGE</strong>&rdquo; (or vague/wandering).",
      "This nerve <strong>VOYAGES</strong> far from the brain, all the way down into the chest and abdomen to reach the heart, lungs, and digestive tract &mdash; the only cranial nerve that travels that far from the head."
    ]
  },
  {
    id: 8,
    topic: "CNS vs. PNS",
    type: "note",
    prompt: "Easy way to remember which is which:",
    points: [
      "<strong>C</strong>entral Nervous System = the CORE &mdash; brain + spinal cord, the control center in the middle of the body.",
      "<strong>P</strong>eripheral Nervous System = out at the PERIPHERY &mdash; the edges, everything branching away from the core.",
      "C comes before P in the alphabet, just like the CNS is the core the PNS branches out FROM."
    ]
  },
  {
    id: 9,
    topic: "Sympathetic vs. Parasympathetic",
    type: "note",
    prompt: "Easy way to remember which is which:",
    points: [
      "<strong>Sym</strong>pathetic &mdash; think &ldquo;Panic button, ramps you UP&rdquo; = fight or flight.",
      "<strong>Para</strong>sympathetic &mdash; think &ldquo;PARAchute, floats you back DOWN&rdquo; = rest &amp; digest."
    ]
  },
  {
    id: 10,
    topic: "Gray Matter vs. White Matter &mdash; location flip",
    type: "note",
    prompt: "Easy way to remember where each one sits in the brain vs. the spinal cord:",
    points: [
      "Picture the <strong>BRAIN</strong> wearing a <strong>gray hoodie</strong> &mdash; gray matter is on the OUTSIDE, white matter hidden inside.",
      "The <strong>CORD</strong> wears it backwards &mdash; white matter on the outside, gray matter tucked inside.",
      "Short version: &ldquo;Brain = gray coat. Cord = flips it.&rdquo;"
    ]
  },
  {
    id: 11,
    topic: "Dendrites vs. Axon &mdash; direction trick",
    type: "note",
    prompt: "Easy way to remember which way signals travel:",
    points: [
      "<strong>D</strong>endrites <strong>D</strong>eliver the signal IN, toward the cell body.",
      "<strong>A</strong>xon carries the signal <strong>A</strong>way from the cell body &mdash; the one-way exit."
    ]
  },
  {
    id: 12,
    topic: "Meninges &mdash; order trick",
    type: "note",
    prompt: "Easy way to remember the order, from outside to inside:",
    points: [
      "&ldquo;<strong>D</strong>ad <strong>A</strong>nd <strong>P</strong>a&rdquo; = <strong>D</strong>ura &rarr; <strong>A</strong>rachnoid &rarr; <strong>P</strong>ia.",
      "<strong>Dura</strong> &mdash; outermost, tough, &ldquo;durable&rdquo; like a thick coat.",
      "<strong>Arachnoid</strong> &mdash; middle, web-like (sounds like &ldquo;arachnid&rdquo;, a spider).",
      "<strong>Pia</strong> &mdash; innermost, thin and delicate, hugs the brain closely."
    ]
  },
  {
    id: 13,
    topic: "Neuron Types &mdash; word-size trick",
    type: "note",
    prompt: "Easy way to remember Unipolar vs. Bipolar vs. Multipolar:",
    points: [
      "<strong>Uni</strong>polar = 1 process (like a &ldquo;unicycle&rdquo; has 1 wheel).",
      "<strong>Bi</strong>polar = 2 processes (like a &ldquo;bicycle&rdquo; has 2 wheels).",
      "<strong>Multi</strong>polar = many processes (like a &ldquo;multi-tool&rdquo;) &mdash; and it's the most common type, found throughout the CNS."
    ]
  },
  {
    id: 14,
    topic: "Ascending vs. Descending Tracts",
    type: "note",
    prompt: "Easy way to remember which direction each one runs:",
    points: [
      "<strong>A</strong>scending = goes UP to the br<strong>A</strong>in &mdash; sensory info heading up.",
      "<strong>D</strong>escending = goes <strong>D</strong>own to <strong>D</strong>o something &mdash; motor commands heading down to the muscles."
    ]
  }
];
