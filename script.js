/**
 * TypeRush – script.js
 * A professional typing speed test application.
 *
 * Features:
 *  - Three difficulty levels (Easy / Medium / Hard), 15+ texts each
 *  - Real-time character-by-character coloring (correct / incorrect / cursor)
 *  - Live WPM, Accuracy, and Timer (with tenths of a second)
 *  - Results modal with personalised message
 *  - Best score persistence via localStorage
 *  - Fully accessible and responsive
 *
 * @version 1.0.0
 */

'use strict';

/* ============================================================
   1.  TEXT LIBRARY
   Each level has 15+ original texts (30–120 words, no Lorem Ipsum).
============================================================ */

/** @type {Object.<string, string[]>} */
const TEXT_LIBRARY = {

  /* ── EASY ──────────────────────────────────────────────────
     Simple vocabulary, short sentences, minimal punctuation.
  ─────────────────────────────────────────────────────────── */
  easy: [
    // 1
    'The sun rose slowly over the mountains and the sky turned bright orange. Birds began to sing and the wind was warm and soft. It was a beautiful morning and the day felt full of hope. I love walking outside when the air is fresh and the world is just waking up.',

    // 2
    'She packed her bag with books and a water bottle. The park was only a short walk from her house. She liked to sit under a big tree and read for hours. The sound of kids playing and dogs running around made her smile. It was her favorite way to spend a Sunday afternoon.',

    // 3
    'He woke up early and made a simple breakfast. Two eggs, some toast, and a glass of orange juice. The kitchen was quiet and the sun was just coming through the window. He sat at the table and looked at the garden. Everything felt calm and slow and good.',

    // 4
    'Learning to ride a bike takes time and practice. At first you might fall a few times but that is okay. The key is to keep trying and not give up. Once you get the balance right it starts to feel natural. Soon you will be riding fast and having a great time.',

    // 5
    'The old dog lay by the fire and slept all afternoon. His fur was soft and warm and he snored a little. The kids loved to curl up next to him and read books. He was a gentle and kind dog who never barked too much. Everyone in the family loved him very much.',

    // 6
    'Rain fell gently on the roof of the small house. Inside it was cozy and warm. The smell of soup on the stove filled the room. A cat sat on the window ledge and watched the drops fall. It was a quiet and peaceful evening and no one needed to go anywhere.',

    // 7
    'The market was busy on Saturday morning. People carried bags full of vegetables and bread. Colors and smells were everywhere. An old man sold honey from jars lined up on a wooden table. A little girl asked her mom to buy some strawberries. The sun was bright and the mood was joyful.',

    // 8
    'He found an old map in the back of a drawer. It showed a path through the forest to a small lake. He had never heard of the lake before. The next day he put on his boots and followed the trail. It took two hours but the lake was beautiful and worth every step.',

    // 9
    'She planted flowers in the window box every spring. Red, yellow, and purple blooms made the street look alive. Neighbors would stop and smile as they walked by. Watering them each morning was her way of starting the day. Small things like that can make a home feel warm and welcoming.',

    // 10
    'The library was empty in the early morning. Just the soft hum of the lights and the smell of old books. He walked slowly between the shelves and ran his fingers over the spines. There was something peaceful about being alone with so many stories. He picked one at random and sat down to read.',

    // 11
    'They took a road trip along the coast. The windows were down and music played softly on the radio. Every few miles a new view appeared. Rocky cliffs, sandy beaches, and small fishing towns. They stopped for ice cream at a place that had been open for fifty years. It was the best they ever had.',

    // 12
    'She made a cup of tea and sat on the porch. The moon was full and bright above the trees. Fireflies blinked slowly in the dark yard. She thought about nothing in particular and everything felt okay. Sometimes the best moments are the ones when nothing special happens at all.',

    // 13
    'The train moved through the green countryside. Cows grazed in the fields and a river ran beside the tracks. He looked out the window and felt a rare kind of calm. Travel by train was slow but that was the point. There was time to think, to read, and to just watch the world go by.',

    // 14
    'She baked a loaf of bread every Friday afternoon. The smell spread through the whole house within an hour. Her kids knew it was ready when they could smell it from their rooms. Warm bread with a little butter was a simple thing but everyone loved it. It had been her tradition for years.',

    // 15
    'The waves were small and the beach was quiet. A few people walked along the edge of the water. He sat on the sand and watched the tide come in. Seagulls called out high above and the sky was a deep clear blue. He did not want to leave but the sun was starting to go down.',
  ],


  /* ── MEDIUM ─────────────────────────────────────────────────
     Natural sentences, standard punctuation, varied vocabulary.
  ─────────────────────────────────────────────────────────── */
  medium: [
    // 1
    'Productivity is not about doing more things; it is about doing the right things. Many people confuse being busy with being effective. A long to-do list can create the illusion of progress while the most important tasks remain untouched. Choosing your priorities carefully and protecting time for deep work can make a real difference in what you actually accomplish each day.',

    // 2
    'Mountains have fascinated humans for thousands of years, serving as spiritual destinations, natural borders, and challenges to overcome. Climbing a peak demands patience, physical endurance, and precise planning. The reward, however, goes beyond the view from the summit. It is the process itself that transforms a person, teaching resilience and the value of steady, deliberate effort.',

    // 3
    'Coffee culture has evolved significantly over the past two decades. What was once a simple morning ritual has become an art form embraced by enthusiasts worldwide. Single-origin beans, precise water temperatures, and brewing methods that take hours have all found their audience. Yet for many people, a decent cup from a corner shop still hits the spot just as well.',

    // 4
    'Reading fiction has been shown to improve empathy. When we follow a character through their inner life, we practice understanding perspectives different from our own. This mental exercise quietly builds the capacity to listen and connect with real people in our daily lives. A good novel is not just entertainment; it is a training ground for human understanding.',

    // 5
    'The ocean covers more than seventy percent of our planet, yet most of it remains unexplored. Pressure, darkness, and extreme cold make deep-sea research technically demanding. Scientists use remotely operated vehicles to collect samples and footage from depths beyond human reach. Each expedition reveals creatures and geological formations that challenge our assumptions about where life can exist.',

    // 6
    'Language shapes the way we think, not just the way we communicate. Speakers of languages with different grammatical structures have been observed to pay attention to the world in different ways. A language that requires you to always specify direction, for example, may sharpen your sense of orientation. Understanding this connection is one of the most fascinating questions in cognitive science.',

    // 7
    'Urban gardening has been growing steadily in popularity across major cities. Rooftops, balconies, vacant lots, and community parks have all been transformed into productive green spaces. Beyond the fresh vegetables and herbs they produce, these gardens create social connections between neighbors who might otherwise never speak. They also help manage urban heat and improve air quality in dense neighborhoods.',

    // 8
    'Sleep is one of the most underrated pillars of health. During sleep, the brain consolidates memories, clears metabolic waste, and regulates emotion. Chronic sleep deprivation is linked to poor decision-making, weakened immunity, and increased risk of cardiovascular disease. Yet modern schedules, artificial lighting, and screen time continue to push rest aside, treating it as something to sacrifice for productivity.',

    // 9
    'Traveling on a budget does not mean compromising on experience. Many of the most memorable trips involve slow travel: spending more time in fewer places, eating where locals eat, and exploring neighborhoods on foot rather than following a packaged tour. When you slow down, you start to notice details that faster travel glosses over, and those details become the stories you tell later.',

    // 10
    'Photography teaches you to look more carefully at the world. When you carry a camera, you begin to notice light, shadow, texture, and composition in everyday scenes. A wet street at night becomes a canvas of reflections; a stranger on a bench becomes a story waiting to be told. The act of framing a shot makes the ordinary feel deliberate and worth attention.',

    // 11
    'The history of cartography is a history of ambition. Early maps were as much about belief and politics as geography. Sea monsters filled unknown oceans, and continents were stretched or shrunk to fit the worldview of the mapmaker. Modern satellite imagery has replaced guesswork with precision, but the impulse behind cartography remains the same: to make sense of the vast and unknown.',

    // 12
    'Cooking from scratch is more than a practical skill; it is a way of paying attention to what you eat. When you chop, simmer, and season your own food, you understand the ingredients, the effort, and the choices involved. That awareness tends to shift what you buy and how you think about nutrition. Even simple meals prepared at home carry a different kind of satisfaction.',

    // 13
    'Volunteering has a measurable impact on the well-being of those who do it. Studies consistently show that people who give time to causes they care about report higher levels of happiness and a stronger sense of purpose. This is partly because helping others shifts focus away from personal anxieties. It also builds community, creates new friendships, and provides skills that can transfer into professional life.',

    // 14
    'Museums are more than storage for the past; they are places where the past speaks to the present. A well-designed exhibition can shift how you see a historical event, an art movement, or a scientific discovery. The best museums do not just display objects; they create encounters. You leave not with just information, but with questions that follow you home and keep you thinking.',

    // 15
    'Forests are among the most complex ecosystems on Earth. A single tree supports hundreds of species of insects, birds, fungi, and plants. Underground, root networks and fungal threads connect trees to one another, allowing them to share nutrients and even chemical signals. Cutting down a forest is not just removing trees; it is dismantling an intricate web of relationships built over centuries.',
  ],


  /* ── HARD ───────────────────────────────────────────────────
     Technical topics: CS, AI, cybersecurity, web dev, cloud.
     Numbers, mixed punctuation, technical jargon.
  ─────────────────────────────────────────────────────────── */
  hard: [
    // 1
    'JavaScripts event loop processes one task at a time from the call stack, while asynchronous operations—such as setTimeout() or fetch()—are delegated to Web APIs. When those operations complete, their callbacks are placed in the task queue (or microtask queue for Promises). The loop continuously checks whether the call stack is empty before dequeuing the next task, enabling non-blocking I/O in a single-threaded runtime.',

    // 2
    'A transformer model relies on the self-attention mechanism to weigh the relevance of each token in a sequence relative to every other token. Unlike recurrent networks, transformers process entire sequences in parallel, making them significantly more efficient to train on modern GPU clusters. GPT-4, released in 2023, uses a variant of this architecture scaled to hundreds of billions of parameters across trillions of training tokens.',

    // 3
    'TLS 1.3 (RFC 8446) reduces the handshake to a single round trip by eliminating several legacy cipher suites and introducing 0-RTT session resumption. The protocol enforces forward secrecy by default, using ephemeral Diffie-Hellman key exchange so that compromising the servers long-term key cannot decrypt previously recorded sessions. RSA key exchange and SHA-1 are no longer permitted under TLS 1.3.',

    // 4
    'In CSS, the cascade determines which rule takes precedence when multiple declarations target the same element. Specificity is calculated using a (0,0,0,0) tuple where inline styles, IDs, classes/pseudo-classes, and type selectors each contribute to a different column. When specificity is equal, the rule that appears later in the source wins. The !important annotation overrides specificity but should be used sparingly to avoid maintenance issues.',

    // 5
    'Docker containers package an application and its dependencies into a single portable unit that runs consistently across environments. Unlike virtual machines, containers share the host OS kernel, making them faster to start and lighter on resources. A Dockerfile defines the build steps: FROM specifies the base image, RUN executes commands at build time, and CMD sets the default command executed at container startup.',

    // 6
    'SQL injection remains one of the most exploited vulnerabilities in web applications, ranked prominently in the OWASP Top 10. An attacker inserts malicious SQL syntax into input fields that are concatenated directly into database queries. Prepared statements with parameterized queries are the primary defense, as the database driver separates data from instructions. Stored procedures, ORMs, and rigorous input validation further reduce attack surface.',

    // 7
    'A convolutional neural network (CNN) applies learnable filters across an input image, producing feature maps that detect edges, textures, and eventually complex patterns. Pooling layers reduce spatial dimensions while retaining dominant features. Deep CNNs such as ResNet-50 use skip connections to mitigate vanishing gradients, enabling networks with 50 or more layers to train effectively. Top-1 accuracy on ImageNet exceeded 90% by 2022.',

    // 8
    'The RESTful API design style uses HTTP verbs semantically: GET retrieves resources, POST creates them, PUT replaces them entirely, PATCH updates specific fields, and DELETE removes them. Statelessness is a core constraint—each request must contain all the information needed to process it, without relying on server-side session state. Hypermedia As The Engine Of Application State (HATEOAS) is the most complete REST compliance level.',

    // 9
    'Kubernetes orchestrates containerized workloads across clusters of machines. A Pod is the smallest deployable unit and may contain one or more containers sharing network and storage. Deployments manage the desired state, rolling out updates with zero downtime using rolling replace strategies. Services expose Pods via a stable IP and DNS name, while Ingress controllers route external HTTP/S traffic to the appropriate Service using host or path rules.',

    // 10
    'Quantum computing encodes information in qubits that can exist in superposition—representing 0 and 1 simultaneously—until measured. Entanglement links qubits so that the state of one instantly influences another regardless of physical distance. Shors algorithm, running on a sufficiently large quantum computer, could factor 2048-bit RSA keys in polynomial time, which threatens current public-key infrastructure. NIST finalized its first post-quantum cryptographic standards in 2024.',

    // 11
    'WebAssembly (Wasm) is a binary instruction format designed for safe, sandboxed execution in web browsers at near-native speed. It is language-agnostic: C, C++, Rust, and Go can compile to Wasm. The module format includes a validation phase that verifies type safety before execution, preventing entire classes of memory corruption bugs. As of 2024, WASI extends the model to server-side and edge environments beyond the browser.',

    // 12
    'Asymmetric encryption uses a public key to encrypt data and a private key to decrypt it—or vice versa for digital signatures. RSA-4096 provides strong security but is computationally expensive; Elliptic Curve Cryptography (ECC) achieves equivalent security with much shorter keys—256-bit ECC approximates the strength of 3072-bit RSA. Key exchange protocols like ECDH allow two parties to derive a shared secret over an insecure channel without transmitting the key itself.',

    // 13
    'Serverless functions execute code in response to events without the developer managing underlying servers. AWS Lambda, Google Cloud Functions, and Azure Functions bill per invocation and execution duration in milliseconds. Cold starts—the delay when a function initializes a new container—can add 200–500 ms of latency. Keeping functions warm, minimizing bundle size, and using provisioned concurrency are common strategies to reduce latency in latency-sensitive applications.',

    // 14
    'The Big O notation describes how algorithm performance scales relative to input size (n). O(1) denotes constant time; O(log n) logarithmic growth, typical of binary search; O(n) linear; O(n log n) is the lower bound for comparison-based sorting algorithms such as merge sort and quicksort; O(n²) appears in naive sorting like bubble sort; and O(2ⁿ) describes exponential growth seen in brute-force subset enumeration. Space complexity follows the same notation for memory usage.',

    // 15
    'Responsive web design uses CSS media queries to adapt layouts to different viewport widths. A mobile-first approach starts with the smallest screen and progressively enhances the layout with min-width breakpoints—e.g., @media (min-width: 768px). Flexible grid systems built with CSS Grid or Flexbox distribute space proportionally. The viewport meta tag (<meta name="viewport" content="width=device-width, initial-scale=1">) instructs mobile browsers to render at the devices native resolution rather than scaling a desktop view.',
  ],
};


/* ============================================================
   2.  APPLICATION STATE
============================================================ */

/** @type {Object} Centralised mutable state */
const state = {
  /** @type {'easy'|'medium'|'hard'} */
  level:             'easy',

  /** @type {string} The current text being typed */
  currentText:       '',

  /** @type {string} Characters typed so far */
  typedText:         '',

  /** @type {number|null} requestAnimationFrame ID */
  animationFrameId:  null,

  /** @type {number|null} High-resolution start timestamp (performance.now) */
  startTimestamp:    null,

  /** @type {number} Elapsed milliseconds at last frame */
  elapsedMs:         0,

  /** @type {boolean} Whether the test has started */
  isRunning:         false,

  /** @type {boolean} Whether the test has finished */
  isFinished:        false,

  /** @type {number} Total characters typed (including corrections) */
  totalTyped:        0,

  /** @type {number} Correctly typed characters */
  correctChars:      0,
};


/* ============================================================
   3.  DOM REFERENCES
============================================================ */

/** @type {HTMLElement} */
const $textDisplay    = document.getElementById('text-display');

/** @type {HTMLTextAreaElement} */
const $typingInput    = document.getElementById('typing-input');

/** @type {HTMLElement} */
const $timer          = document.getElementById('timer');

/** @type {HTMLElement} */
const $wpm            = document.getElementById('wpm');

/** @type {HTMLElement} */
const $accuracy       = document.getElementById('accuracy');

/** @type {HTMLElement} */
const $bestScore      = document.getElementById('best-score');

/** @type {HTMLElement} */
const $newTestBtn     = document.getElementById('new-test-btn');

/** @type {HTMLElement} */
const $modalBackdrop  = document.getElementById('modal-backdrop');

/** @type {HTMLElement} */
const $modalNewTestBtn = document.getElementById('modal-new-test-btn');

/** @type {HTMLElement} */
const $modalCloseBtn  = document.getElementById('modal-close-btn');

/** @type {HTMLElement} */
const $modalEmoji     = document.getElementById('modal-emoji');

/** @type {HTMLElement} */
const $modalTitle     = document.getElementById('modal-title');

/** @type {HTMLElement} */
const $modalTime      = document.getElementById('modal-time');

/** @type {HTMLElement} */
const $modalWpm       = document.getElementById('modal-wpm');

/** @type {HTMLElement} */
const $modalAccuracy  = document.getElementById('modal-accuracy');

/** @type {HTMLElement} */
const $modalBest      = document.getElementById('modal-best');

/** @type {NodeList} */
const $difficultyBtns = document.querySelectorAll('.difficulty-btn');


/* ============================================================
   4.  UTILITY FUNCTIONS
============================================================ */

/**
 * Returns a random integer between 0 (inclusive) and max (exclusive).
 * @param {number} max
 * @returns {number}
 */
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Picks a random text from the library for the current level.
 * Avoids repeating the immediately previous text if possible.
 * @returns {string}
 */
function pickRandomText() {
  const pool    = TEXT_LIBRARY[state.level];
  const prev    = state.currentText;
  let candidate = '';

  // Attempt up to 5 times to find a different text
  for (let attempt = 0; attempt < 5; attempt++) {
    candidate = pool[randomInt(pool.length)];
    if (candidate !== prev) break;
  }

  return candidate;
}

/**
 * Formats milliseconds into the display string "M:SS.T".
 * @param {number} ms
 * @returns {string} e.g. "1:23.4"
 */
function formatTime(ms) {
  const totalTenths = Math.floor(ms / 100);
  const tenths      = totalTenths % 10;
  const totalSeconds = Math.floor(ms / 1000);
  const seconds      = totalSeconds % 60;
  const minutes      = Math.floor(totalSeconds / 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}.${tenths}`;
}

/**
 * Formats milliseconds into a human-readable string for the modal.
 * @param {number} ms
 * @returns {string} e.g. "1m 23s"
 */
function formatTimeLong(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const seconds      = totalSeconds % 60;
  const minutes      = Math.floor(totalSeconds / 60);
  if (minutes === 0) return `${seconds}s`;
  return `${minutes}m ${String(seconds).padStart(2, '0')}s`;
}

/**
 * Calculates WPM using the standard definition (1 word = 5 characters).
 * @param {number} correctChars Number of correctly typed characters.
 * @param {number} elapsedMs    Elapsed time in milliseconds.
 * @returns {number}
 */
function calcWPM(correctChars, elapsedMs) {
  if (elapsedMs < 500) return 0; // avoid division by near-zero
  const minutes = elapsedMs / 1000 / 60;
  const words   = correctChars / 5;
  return Math.round(words / minutes);
}

/**
 * Calculates accuracy as a percentage.
 * @param {number} correctChars
 * @param {number} totalTyped
 * @returns {number} 0–100
 */
function calcAccuracy(correctChars, totalTyped) {
  if (totalTyped === 0) return 100;
  return Math.round((correctChars / totalTyped) * 100);
}

/**
 * Returns the localStorage key for the best score of a given level.
 * @param {string} level
 * @returns {string}
 */
function bestScoreKey(level) {
  return `typeRush_best_${level}`;
}

/**
 * Reads the best WPM score for the given level from localStorage.
 * @param {string} level
 * @returns {number}
 */
function readBestScore(level) {
  const stored = localStorage.getItem(bestScoreKey(level));
  return stored ? parseInt(stored, 10) : 0;
}

/**
 * Writes a new best WPM score for the given level to localStorage.
 * Only writes if the new score exceeds the stored best.
 * @param {string} level
 * @param {number} wpm
 * @returns {boolean} true if a new best was set
 */
function saveBestScore(level, wpm) {
  const current = readBestScore(level);
  if (wpm > current) {
    localStorage.setItem(bestScoreKey(level), String(wpm));
    return true;
  }
  return false;
}

/**
 * Returns the personalised message, emoji, and title for the results modal
 * based on the WPM achieved.
 * @param {number} wpm
 * @returns {{ emoji: string, title: string, subtitle: string }}
 */
function getResultMessage(wpm) {
  if (wpm >= 80) {
    return { emoji: '🏆', title: 'Excellent!',       subtitle: 'You\'re a typing legend.' };
  } else if (wpm >= 60) {
    return { emoji: '⚡', title: 'Amazing!',         subtitle: 'Incredibly fast fingers.' };
  } else if (wpm >= 40) {
    return { emoji: '🎯', title: 'Great Job!',       subtitle: 'Solid speed and accuracy.' };
  } else if (wpm >= 25) {
    return { emoji: '💪', title: 'Keep It Up!',      subtitle: 'You\'re improving steadily.' };
  } else {
    return { emoji: '📚', title: 'Keep Practicing!', subtitle: 'Every keystroke counts.' };
  }
}


/* ============================================================
   5.  TEXT RENDERING
   Injects individual <span> elements for each character.
============================================================ */

/**
 * Renders the current text into the #text-display element as
 * individual character spans. All chars start in the default (untyped) state.
 */
function renderTextDisplay() {
  $textDisplay.innerHTML = ''; // clear previous content

  for (let i = 0; i < state.currentText.length; i++) {
    const span = document.createElement('span');

    // Preserve whitespace so spaces are visible
    span.textContent = state.currentText[i];
    span.classList.add('char');
    span.dataset.index = String(i);

    $textDisplay.appendChild(span);
  }

  // Highlight the very first character as the current cursor position
  updateCharHighlights('');
}

/**
 * Updates the visual state (correct / incorrect / current) of each
 * character span based on what has been typed so far.
 * @param {string} typed - The string currently in the textarea.
 */
function updateCharHighlights(typed) {
  const spans = $textDisplay.querySelectorAll('.char');

  spans.forEach((span, index) => {
    // Remove all state classes
    span.classList.remove('char--correct', 'char--incorrect', 'char--current');

    if (index < typed.length) {
      // Already typed
      if (typed[index] === state.currentText[index]) {
        span.classList.add('char--correct');
      } else {
        span.classList.add('char--incorrect');
      }
    } else if (index === typed.length) {
      // Cursor position (next character to type)
      span.classList.add('char--current');
    }
  });

  // Scroll the current character into view on long texts
  const currentSpan = $textDisplay.querySelector('.char--current');
  if (currentSpan) {
    currentSpan.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}


/* ============================================================
   6.  TIMER (requestAnimationFrame loop)
============================================================ */

/**
 * Starts the high-resolution timer using requestAnimationFrame.
 * Stores the start timestamp and launches the animation loop.
 */
function startTimer() {
  if (state.isRunning) return;
  state.isRunning   = true;
  state.startTimestamp = performance.now();
  scheduleFrame();
}

/**
 * Schedules the next animation frame for the timer update.
 */
function scheduleFrame() {
  state.animationFrameId = requestAnimationFrame(timerTick);
}

/**
 * Called on every animation frame. Updates elapsed time, WPM display,
 * and timer display, then schedules the next frame.
 * @param {number} timestamp - DOMHighResTimeStamp from rAF
 */
function timerTick(timestamp) {
  if (!state.isRunning) return;

  state.elapsedMs = timestamp - state.startTimestamp;

  // Update live displays
  $timer.textContent = formatTime(state.elapsedMs);

  const wpm      = calcWPM(state.correctChars, state.elapsedMs);
  const accuracy = calcAccuracy(state.correctChars, state.totalTyped);
  $wpm.textContent      = String(wpm);
  $accuracy.textContent = `${accuracy}%`;

  scheduleFrame();
}

/**
 * Stops the animation loop and freezes the timer.
 */
function stopTimer() {
  if (state.animationFrameId !== null) {
    cancelAnimationFrame(state.animationFrameId);
    state.animationFrameId = null;
  }
  state.isRunning = false;
}


/* ============================================================
   7.  TYPING INPUT HANDLER
============================================================ */

/**
 * Handles every input event on the textarea.
 * - Starts the timer on first keystroke.
 * - Updates character highlights.
 * - Tracks correctness and total typed count.
 * - Detects test completion.
 * @param {InputEvent} event
 */
function handleInput(event) {
  if (state.isFinished) return;

  const typed = $typingInput.value;

  // Clamp input length to avoid going past the text
  if (typed.length > state.currentText.length) {
    $typingInput.value = typed.slice(0, state.currentText.length);
    return;
  }

  // Start the timer on the very first character typed
  if (!state.isRunning && typed.length > 0) {
    startTimer();
  }

  // Count correct characters among typed
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === state.currentText[i]) correct++;
  }

  // For accuracy we track total chars typed (cumulative including deletions)
  // We approximate using the current total typed characters approach:
  // totalTyped represents the total keystrokes committed (not backspaces), so we
  // measure it from the textarea length changes.
  const prevLength = state.typedText.length;
  const currLength = typed.length;

  if (currLength > prevLength) {
    // Characters were added
    state.totalTyped += (currLength - prevLength);
  }
  // Deletions do not increase totalTyped (accuracy penalises mistakes already)

  state.typedText   = typed;
  state.correctChars = correct;

  // Update visual highlights
  updateCharHighlights(typed);

  // Check for test completion: all characters typed
  if (typed.length === state.currentText.length) {
    finishTest();
  }
}

/**
 * Handles keyboard events for accessibility and UX.
 * Allows Tab to move focus rather than inserting a tab character.
 * @param {KeyboardEvent} event
 */
function handleKeyDown(event) {
  // Allow Tab to navigate away from textarea
  if (event.key === 'Tab') {
    event.preventDefault();
    $newTestBtn.focus();
  }
}


/* ============================================================
   8.  TEST LIFECYCLE
============================================================ */

/**
 * Initialises a new test:
 *  - Picks a random text for the current level
 *  - Resets all state
 *  - Re-renders the text display
 *  - Clears and focuses the textarea
 *  - Updates the best score display
 */
function initTest() {
  // Stop any running timer
  stopTimer();

  // Reset state
  state.currentText    = pickRandomText();
  state.typedText      = '';
  state.elapsedMs      = 0;
  state.startTimestamp = null;
  state.isRunning      = false;
  state.isFinished     = false;
  state.totalTyped     = 0;
  state.correctChars   = 0;

  // Render text
  renderTextDisplay();

  // Clear textarea
  $typingInput.value       = '';
  $typingInput.disabled    = false;

  // Reset live stat displays
  $timer.textContent    = '0:00.0';
  $wpm.textContent      = '0';
  $accuracy.textContent = '100%';

  // Show current best score for the active level
  $bestScore.textContent = String(readBestScore(state.level));

  // Focus the input so the user can start immediately
  $typingInput.focus();
}

/**
 * Called when the user has typed every character in the current text.
 * Stops the timer, locks input, saves best score, and shows the modal.
 */
function finishTest() {
  stopTimer();

  state.isFinished     = true;
  $typingInput.disabled = true;

  // Final calculations
  const finalWpm      = calcWPM(state.correctChars, state.elapsedMs);
  const finalAccuracy = calcAccuracy(state.correctChars, state.totalTyped);
  const isNewBest     = saveBestScore(state.level, finalWpm);

  // Update best score display
  $bestScore.textContent = String(readBestScore(state.level));

  // Show modal after a brief delay for a polished feel
  setTimeout(() => showModal(finalWpm, finalAccuracy, isNewBest), 300);
}


/* ============================================================
   9.  RESULTS MODAL
============================================================ */

/**
 * Populates and reveals the results modal.
 * @param {number}  wpm       - Words per minute achieved.
 * @param {number}  accuracy  - Accuracy percentage.
 * @param {boolean} isNewBest - Whether this is a new personal best.
 */
function showModal(wpm, accuracy, isNewBest) {
  const msg = getResultMessage(wpm);

  // Populate modal content
  $modalEmoji.textContent    = msg.emoji;
  $modalTitle.textContent    = msg.title;

  // Update the subtitle inside modal (subtitle paragraph lives in the modal header)
  const $subtitleEl = document.getElementById('modal-desc');
  if ($subtitleEl) {
    $subtitleEl.textContent = isNewBest ? '🎉 New personal best!' : msg.subtitle;
  }

  $modalTime.textContent     = formatTimeLong(state.elapsedMs);
  $modalWpm.textContent      = String(wpm);
  $modalAccuracy.textContent = `${accuracy}%`;
  $modalBest.textContent     = String(readBestScore(state.level));

  // Show modal
  $modalBackdrop.setAttribute('aria-hidden', 'false');
  $modalBackdrop.classList.add('modal--visible');

  // Move focus into the modal for accessibility
  $modalNewTestBtn.focus();
}

/**
 * Hides the results modal and returns focus to the typing input.
 */
function hideModal() {
  $modalBackdrop.classList.remove('modal--visible');
  $modalBackdrop.setAttribute('aria-hidden', 'true');

  // Return focus to textarea for keyboard users
  $typingInput.focus();
}


/* ============================================================
   10. DIFFICULTY SELECTOR
============================================================ */

/**
 * Updates the active difficulty button and starts a new test
 * at the selected level.
 * @param {string} level - 'easy' | 'medium' | 'hard'
 */
function setDifficulty(level) {
  state.level = level;

  $difficultyBtns.forEach((btn) => {
    const isActive = btn.dataset.level === level;
    btn.classList.toggle('difficulty-btn--active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  initTest();
}


/* ============================================================
   11. EVENT LISTENERS
============================================================ */

/** Typing input: handle each character typed */
$typingInput.addEventListener('input', handleInput);

/** Typing input: handle keyboard navigation */
$typingInput.addEventListener('keydown', handleKeyDown);

/** New Test button in the main interface */
$newTestBtn.addEventListener('click', () => {
  hideModal();
  initTest();
});

/** New Test button inside the modal */
$modalNewTestBtn.addEventListener('click', () => {
  hideModal();
  initTest();
});

/** Close button inside the modal */
$modalCloseBtn.addEventListener('click', hideModal);

/** Close modal when clicking the backdrop (outside the modal card) */
$modalBackdrop.addEventListener('click', (event) => {
  if (event.target === $modalBackdrop) {
    hideModal();
  }
});

/** Close modal with Escape key */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const isModalOpen = $modalBackdrop.classList.contains('modal--visible');
    if (isModalOpen) hideModal();
  }
});

/** Difficulty selector buttons */
$difficultyBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    setDifficulty(btn.dataset.level);
  });
});

/**
 * Focus the textarea when clicking anywhere in the text display area,
 * improving the UX on desktop by not requiring a precise click on the textarea.
 */
$textDisplay.addEventListener('click', () => {
  if (!state.isFinished) $typingInput.focus();
});

/**
 * Prevent paste into the textarea to ensure fair testing.
 */
$typingInput.addEventListener('paste', (event) => {
  event.preventDefault();
});


/* ============================================================
   12. INITIALISATION
============================================================ */

/**
 * Bootstraps the application:
 * - Starts with Easy level and a random text
 * - Loads stored best scores
 * Called once on DOMContentLoaded (script is placed at end of body,
 * so DOM is already parsed, but we use the event for safety).
 */
function init() {
  state.level = 'easy';

  // Ensure the correct button is active on load
  $difficultyBtns.forEach((btn) => {
    const isEasy = btn.dataset.level === 'easy';
    btn.classList.toggle('difficulty-btn--active', isEasy);
    btn.setAttribute('aria-pressed', String(isEasy));
  });

  // Load and display the best score for the default level
  $bestScore.textContent = String(readBestScore(state.level));

  // Start the first test
  initTest();
}

// The script tag is at the end of <body>, so the DOM is already ready.
// Using DOMContentLoaded here as a safety net for deferred loading scenarios.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}