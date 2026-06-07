export const presentationData = [
  {
    type: 'title',
    title: 'AI BASED WAZUH ALERT CLASSIFIER AND ANALYSER USING LLM',
    presenter: 'Cherrak Ismail Anis',
    specialty: 'ISI',
    supervisor: 'Dr M.Baba-Ahmed'
  },
  {
    type: 'contents',
    title: 'Contents',
    items: [
      { num: '1', title: 'Introduction', desc: 'Context, Problem Statement, Objectives' },
      { num: '2', title: 'Background', desc: 'Wazuh, MITRE ATT&CK, LLM Strategies' },
      { num: '3', title: 'State-of-the-Art', desc: 'Existing Solutions, Gap Analysis' },
      { num: '4', title: 'Contribution', desc: 'Proposed Architecture, Dataset, Fine-Tuning' },
      { num: '5', title: 'Conclusion', desc: 'Summary, Performance, Future Outlook' }
    ]
  },
  {
    type: 'section-divider',
    num: '1',
    title: 'Introduction'
  },
  {
    type: 'foundation',
    title: 'Wazuh SIEM/XDR Platform',
    wazuh: {
      title: 'Wazuh Overview',
      intro: 'An open-source, enterprise-grade security monitoring platform combining SIEM and XDR capabilities to detect, analyze, and respond to threats.',
      points: [
        { label: 'Agent-Based Collection', description: 'Lightweight agent monitors files, processes, configurations, and system logs.' },
        { label: 'Real-time Rules Engine', description: 'Processes logs via decoders and triggers alerts based on hundreds of built-in rule files.' },
        { label: 'Security Analytics', description: 'Detects anomalies, hidden malware, policy violations, and system vulnerabilities.' },
        { label: 'Active Response Actions', description: 'Automates remediation (e.g., firewall block, service restart, host isolation) upon detection.' },
        { label: 'Unified XDR Features', description: 'Integrates endpoint protection with cloud monitoring, container security, and log auditing.' }
      ]
    },
    quote: 'Wazuh serves as our primary detection engine, feeding telemetry into the AI triage pipeline.'
  },
  // {
  //   type: 'siem-mitre',
  //   title: 'Definitions: SIEM & MITRE ATT&CK',
  //   siem: {
  //     title: 'SIEM (Security Information & Event Management)',
  //     desc: 'A centralized system that aggregates, correlates, and analyzes security data from across an entire IT infrastructure to detect threats.',
  //     points: [
  //       { label: 'Log Aggregation', description: 'Gathers security event logs from endpoints, networks, databases, and servers.' },
  //       { label: 'Correlation Engine', description: 'Links disparate events to detect complex multi-stage attack patterns in real-time.' },
  //       { label: 'Retention & Compliance', description: 'Maintains long-term historical log storage to satisfy legal and security audit frameworks.' }
  //     ]
  //   },
  //   mitre: {
  //     title: 'MITRE ATT&CK Framework',
  //     desc: 'A structured, globally accessible knowledge base of adversary tactics and techniques based on real-world observations.',
  //     points: [
  //       { label: 'Tactics (The Why)', description: '14 categories representing the adversary\'s immediate technical goals (e.g., Persistence, Exfiltration).' },
  //       { label: 'Techniques (The How)', description: 'Specific methods and commands used by attackers to achieve their tactical goals.' },
  //       { label: 'Defense Alignment', description: 'Enables defenders to map alert detections directly to specific threat actor behaviors.' }
  //     ]
  //   }
  // },
  {
    type: 'alert-fatigue',
    title: 'The Alert Fatigue Crisis',
    items: [
      {
        title: 'Volume Overload',
        desc: 'Modern SIEMs like Wazuh generate thousands of alerts daily, overwhelming SOC analysts and burying critical signals.'
      },
      {
        title: 'False Positive Burden',
        desc: 'Analysts spend over 25% of their time investigating events that turn out to be benign, leading to wasted resources.'
      }
    ],
    stat: { number: '45%', label: 'False Positives in typical SOC environment' },
    conclusion: 'Alert fatigue leads to missed threats, slow response times, and high operational costs.'
  },
  {
    type: 'objectives',
    title: 'Project Objectives',
    items: [
      {
        icon: '🎯',
        title: 'Automated Classification',
        desc: 'Build a fine-tuned LLM-based binary classifier that automatically distinguishes True Positive alerts from False Positives, reducing workload at the first stage of triage.'
      },
      {
        icon: '🔍',
        title: 'Deep Threat Analysis',
        desc: 'Deploy a few-shot LLM to produce MITRE ATT&CK mapping, natural language threat descriptions, and concrete Incident Response action recommendations.'
      },
      {
        icon: '🌐',
        title: 'Integrated Web App',
        desc: 'Deliver the full pipeline as a production-ready web application with a custom dashboard for SOC analysts to monitor, review, and act on alerts in real time.'
      }
    ]
  },
  {
    type: 'section-divider',
    num: '2',
    title: 'Background'
  },
  {
    type: 'soc-operations',
    title: 'Security Operations Center (SOC) & Blue Team',
    roles: ['Alert triage', 'Investigation', 'Threat hunting / IR'],
    items: [
      { text: 'SOC is the centralized unit responsible for continuous monitoring, detection, and response to cybersecurity threats.' },
      { label: 'Blue team', text: 'Defensive security: analysts triage alerts, investigate incidents, and enforce security policies.' },
      { text: 'Key SOC roles usually escalate from L1 alert triage to L2 investigation, then L3 threat hunting and incident response.' },
      { label: 'Core challenge', text: 'Alert fatigue. Modern SOCs receive thousands of alerts per day, with many environments seeing 40-60% false positives.' },
      { text: 'Manual triage is slow, error-prone, and unsustainable at scale, which motivates automation.' }
    ]
  },
  {
    type: 'siem-workflow',
    title: 'SIEM Systems in the SOC Workflow',
    definition: 'SIEM means Security Information and Event Management. It aggregates logs from endpoints, networks, servers, and applications, then correlates events and generates alerts.',
    functions: [
      'Log collection and normalization across heterogeneous sources.',
      'Real-time correlation and alert generation.',
      'Compliance reporting and forensic investigation support.',
      'Central analyst view for search, dashboards, and cases.'
    ],
    limitations: [
      'Traditional detections are mostly rule-based.',
      'High false-positive rate increases analyst workload.',
      'Limited contextual understanding of ambiguous alerts.',
      'No native automated response or reasoning layer.'
    ]
  },
  {
    type: 'threat-grid',
    title: 'Threats Detected by SIEM Systems',
    rows: [
      ['Brute Force / Auth Attacks', 'SSH/RDP brute force, credential stuffing'],
      ['Lateral Movement', 'Pass-the-hash, Kerberoasting'],
      ['Privilege Escalation', 'Sudo abuse, token impersonation'],
      ['Persistence', 'Scheduled tasks, cron jobs, registry keys'],
      ['Data Exfiltration', 'Unusual outbound traffic, DNS tunneling'],
      ['Malware / C2', 'Beacon traffic, known malicious IPs'],
      ['Web Attacks', 'SQLi, XSS, directory traversal']
    ],
    note: 'MITRE ATT&CK maps these behaviors to tactics and techniques, which is used later in the Stage 2 LLM analysis.'
  },
  {
    type: 'wazuh-components',
    title: 'Wazuh Architecture — Core Components',
    components: [
      {
        title: 'Wazuh Agent',
        icon: '◆',
        points: [
          'Lightweight daemon installed on monitored endpoints.',
          'Collects system logs, auth logs, syslog, and Windows Event Logs.',
          'Runs FIM, rootkit detection, vulnerability scanning, and Auditd syscall auditing.',
          'Communicates with the manager over an encrypted channel on port 1514.'
        ]
      },
      {
        title: 'Wazuh Manager',
        icon: '◇',
        points: [
          'Central brain that receives, decodes, and analyzes agent data.',
          'Applies 5000+ XML-based built-in rules, with full customization.',
          'Pipeline: ingestion, decoder, rule engine, alert generation.',
          'Assigns severity 0-15, MITRE tags, and compliance mappings.'
        ]
      },
      {
        title: 'Indexer & Dashboard',
        icon: '⬢',
        points: [
          'Indexer is OpenSearch-based and stores alerts as JSON documents.',
          'Dashboard provides visualization, search, and case management.',
          'REST API exposes alerts for external integrations.',
          'Our collector uses this API as the entry point to the AI pipeline.'
        ]
      }
    ]
  },
  {
    type: 'wazuh-pipeline',
    title: 'Wazuh Architecture — Alert Pipeline & Rule Engine',
    flow: [
      'Event occurs on an endpoint, such as a failed SSH login.',
      'Agent captures the log entry in real time.',
      'Manager decoder parses the raw log and extracts fields like user, IP, action, and status.',
      'Rule engine matches decoded fields against the rule tree.',
      'Alert is generated with rule ID, description, severity, groups, and MITRE tags.',
      'Alert is forwarded to the Indexer and stored as a JSON document.',
      'Dashboard renders the alert for analysts, while the API exposes it for external tools.'
    ],
    ruleDetails: [
      'Rules are identified by numeric IDs, such as 9701 for Dovecot auth success or 5710 for SSH brute force.',
      'Each rule has a severity level from 0-15, groups, description, and decoder reference.',
      'Rules can be chained through parent and composite frequency-based logic.',
      'rip and lip fields are extracted for rule logic and are critical in our rule 9701 hybrid override.'
    ]
  },
  {
    type: 'ai-siem',
    title: 'AI-Augmented SIEM',
    why: [
      'Rule-based SIEMs cannot generalize well to novel attacks.',
      'Machine learning supports behavioral baselines, anomaly detection, and false-positive reduction.',
      'LLMs add contextual reasoning, natural language explanation, and threat narrative generation.'
    ],
    approaches: [
      { title: 'Classical ML', desc: 'Random Forest and XGBoost for alert classification and FP/TP scoring.' },
      { title: 'Deep Learning', desc: 'LSTM and Transformer models for sequence-based anomaly detection in logs.' },
      { title: 'LLMs', desc: 'GPT, LLaMA, and fine-tuned models for triage, IR recommendation, and log summarization.' }
    ],
    wazuh: [
      'Wazuh has no native ML or LLM pipeline, so integration must be custom-built.',
      'Our collector queries Wazuh alerts and sends them to Stage 1 fine-tuned LLM classification.',
      'Stage 2 few-shot LLM adds MITRE mapping and incident-response advice.',
      'PostgreSQL stores verdicts, analysis, and analyst-facing outcomes.'
    ]
  },
  {
    type: 'section-divider',
    num: '3',
    title: 'State-of-the-Art'
  },
  {
    type: 'soa-paradigms',
    title: 'Approaches to Automated Alert Triage',
    paradigms: [
      {
        num: '1',
        title: 'Classical ML',
        desc: 'Random Forest, DBSCAN, and Isolation Forest applied to structured SIEM features. High accuracy, real-time throughput, zero explainability.'
      },
      {
        num: '2',
        title: 'Deep Learning',
        desc: 'CNN-LSTM hybrids, attention mechanisms, and optimized LSTMs for temporal sequence modeling. Higher accuracy, still opaque.'
      },
      {
        num: '3',
        title: 'Fine-tuned LLMs',
        desc: 'LLaMA, Gemma, and BERT variants trained on labeled alert data for TP/FP classification with semantic understanding of raw alert JSON.'
      },
      {
        num: '4',
        title: 'RAG LLM Copilots',
        desc: 'LLMs grounded in MITRE ATT&CK and NIST CSF via vector retrieval. Analyst-readable narratives, MITRE mapping, and IR recommendations.'
      }
    ],
    note: 'Each paradigm is progressively more capable but computationally heavier. No prior work combines all four capabilities in one live Wazuh pipeline.'
  },
  {
    type: 'soa-datasets',
    title: 'Datasets Enabling This Research',
    datasets: [
      {
        title: 'kholil-lil/wazuh-alerts',
        meta: 'Hugging Face, MIT',
        points: [
          'Raw Wazuh alert JSON records labeled True Positive or False Positive.',
          'Alpaca instruction-tuning format: instruction plus alert JSON to TP/FP label.',
          'Covers SSH brute force, log rotation false positives, and active-response false positives.',
          'Used directly for supervised fine-tuning of our Stage 1 model.'
        ]
      },
      {
        title: 'AIT Alert Data Set',
        meta: 'Zenodo, CC BY 4.0',
        points: [
          '2.65M alerts across Wazuh, Suricata, and AMiner sources.',
          'Eight simulated attack scenarios from reconnaissance to exfiltration.',
          'Temporal labels separate attack phases from benign activity.',
          'Large-scale benchmark for alert correlation and filtering evaluation.'
        ]
      }
    ]
  },
  {
    type: 'soa-ml-dl',
    title: 'Classical ML & Deep Learning for Alert Classification',
    rows: [
      ['ML-Enhanced Wazuh', 'RF + DBSCAN + Isolation Forest', '97.2%', 'No explainability'],
      ['Proactive SIEM', 'PCA + ICA + LSTM on Wazuh data', 'Improved baseline', 'No explainability'],
      ['ESN-RF Adaptive', 'Echo State Net + TF-IDF + RF', '99.5%', 'Generic SIEM dataset'],
      ['CNN-LSTM IoT IDS', 'Spatial + temporal hybrid', '98.42% / F1 98.57%', 'FPR 9.17%'],
      ['Attention-CNN-LSTM', 'Self-attention + CNN + LSTM', '94.8-97.5%', 'No IR output'],
      ['Xavier-CMAE', 'CNN + Multi-Head Attention', '99.971% / FPR 0.018%', 'No semantic reasoning']
    ],
    takeaway: 'Classical ML can reach real-time throughput at high accuracy, but these approaches remain black boxes with no threat narrative output.'
  },
  {
    type: 'soa-llm-works',
    title: 'LLM-Based Alert Classification & Threat Analysis',
    groups: [
      {
        title: 'LLM Classifiers',
        items: [
          { name: 'kholil-lil/wazuh-model', desc: 'LLaMA 3.1 8B with LoRA, 92% accuracy on Wazuh alerts. Binary only, no reasoning.' },
          { name: 'Noa et al.', desc: 'Local LLMs versus classical ML: LLM F1 = 0.928 vs XGBoost F1 = 0.555, strong evidence for LLM-first triage.' },
          { name: 'CAN-LLAMA2', desc: 'LLaMA 2 fine-tuned for IDS with 99.9993% accuracy and FAR 3.1e-6.' }
        ]
      },
      {
        title: 'LLM Analysis Systems',
        items: [
          { name: 'SERC', desc: 'Wazuh ingestion plus RAG over MITRE ATT&CK and NIST CSF for analyst narratives. No upstream FP filter.' },
          { name: 'HuntGPT', desc: 'RF classifier with SHAP/LIME and GPT-3.5 explanation layer. Early ML plus LLM hybrid.' },
          { name: 'Autonomous IR', desc: 'RAG with CTI retrieval from MISP/OTX to produce mitigation strategies on LogPoint alerts.' },
          { name: 'ATT&CK Insights', desc: 'LLM maps raw IDS logs to MITRE tactics and adversarial behavioral traits.' }
        ]
      }
    ]
  },
  {
    type: 'section-divider',
    num: '4',
    title: 'Contribution'
  },
  {
    type: 'contribution-motivation',
    title: 'Motivation — Why This System?',
    cards: [
      {
        title: 'The Problem',
        icon: 'problem',
        items: [
          'SOCs face thousands to millions of Wazuh alerts daily, with most alerts becoming false positives.',
          'Rule-based triage is static: it cannot adapt to evolving attacks or explain its decisions.',
          'Classical ML classifiers reach high accuracy but remain black boxes with no narrative, MITRE mapping, or IR guidance.',
          'Result: alert fatigue, increased MTTD, and genuine threats buried in noise.'
        ]
      },
      {
        title: 'The Gap',
        icon: 'gap',
        items: [
          'Existing LLM classifiers, such as kholil-lil/wazuh-model, only produce binary labels.',
          'Existing LLM analysis tools, such as SERC, process every alert including false positives.',
          'No prior system filters FPs and produces structured threat intelligence in one live pipeline.'
        ]
      },
      {
        title: 'Our Answer',
        icon: 'answer',
        items: [
          'A two-stage automated pipeline: a fine-tuned LLM gates traffic, then a prompted LLM reasons about confirmed threats.',
          'Runs fully locally on consumer GPU hardware with no cloud dependency or data leakage risk.',
          'Outputs TP/FP label, MITRE ATT&CK mapping, attack description, and exact IR command into PostgreSQL and a custom dashboard.'
        ]
      }
    ]
  },
  {
    type: 'contribution-architecture',
    title: 'Pipeline Architecture',
    image: '/pipeline.png',
    caption: [
      { label: 'Wazuh Manager', text: 'continuously generates alerts, then collector.py polls them every second.' },
      { label: 'Stage 1 — Fine-tuned LLM', text: 'LLaMA 3.1 8B with QLoRA served via Ollama classifies each alert as TP or FP and writes label, confidence, and reason to labeled_alerts.' },
      { label: 'FP path', text: 'stores the alert immediately with no further processing, eliminating analyst workload for obvious noise.' },
      { label: 'Stage 2 — Prompted LLM', text: 'analyst-triggered one-shot analysis returns attack type, MITRE tactic/technique, description, and IR command into llm_analysis.' },
      { label: 'Dashboard', text: 'FastAPI plus vanilla HTML/JS gives unified alerts, real-time KPIs, one-click analysis, label override, and bulk FP purge.' }
    ]
  },
  {
    type: 'contribution-dataset',
    title: 'Dataset — Construction & Sources',
    sources: [
      {
        title: 'kholil-lil/wazuh-alerts',
        meta: 'Hugging Face, MIT',
        items: [
          '~700 pre-labeled Wazuh alerts in Alpaca format: instruction, raw JSON input, and TP/FP output.',
          'Used directly as the corpus foundation with no structural transformation needed.'
        ]
      },
      {
        title: 'AIT-ADS',
        meta: '2.6M records, Wazuh subset only',
        items: [
          'Filtered to Wazuh-only rows where name_decoder is non-null; labels normalized to canonical form.',
          'Balanced sampling: 100 TP and 100 FP via stratified random selection to avoid class skew.',
          'Alpaca-wrapped with the same instruction field.'
        ]
      },
      {
        title: 'Personal Wazuh Instance',
        meta: 'Live lab environment',
        items: [
          'Raw alerts.json exports covering Windows Event Channel, SSH auth, FIM, and log rotation events.',
          'Anonymized agent.name, agent.id, agent.ip, and manager fields before training.',
          'Manually labeled by the author using environment knowledge, then Alpaca-wrapped.'
        ]
      }
    ],
    summary: [
      { label: 'Clean records', value: '738' },
      { label: 'Training split', value: '590' },
      { label: 'Test split', value: '148' }
    ]
  },
  {
    type: 'contribution-dataset-analysis',
    title: 'Why Not Classical ML? — AIT Dataset Analysis',
    metrics: [
      { label: 'Total records', value: '2.65M', desc: 'Large scale, but heavily skewed across 11 classes.' },
      { label: 'dirb class', value: '64.30%', desc: '1,671,940 rows are web directory scanning.' },
      { label: 'benign class', value: '33.95%', desc: '882,739 rows dominate the negative class.' },
      { label: 'Other attacks', value: '1.75%', desc: 'Only 45,584 rows cover all remaining attack types.' }
    ],
    binaryNotes: [
      'dirb makes up 97.35% of the True Positive class under binary classification.',
      'Rare but critical attacks are tiny: reverse_shell 80, webshell 109, privilege_escalation 158, service_stop 4.',
      'A classical model can score high validation accuracy while being blind to the attacks that matter most.'
    ],
    conclusion: [
      'Statistical classifiers minimize loss, so they optimize for the dominant class.',
      'High reported accuracy creates a misleading false sense of security.',
      'LLMs bring pretrained semantic understanding of logs and security concepts, making them more robust to rare critical attacks.'
    ],
    images: {
      donut: '/03_dirb_benign_dominance_donut.png',
      tpComposition: '/04_binary_true_positive_composition.png'
    }
  },
  {
    type: 'contribution-preprocessing',
    title: 'Alert Preprocessing — What the Model Reads',
    intro: 'Each raw Wazuh JSON alert is flattened into a structured natural-language context block. The model sees high-signal fields that preserve both security semantics and raw evidence.',
    fields: [
      { field: 'rule.level /15', reason: "Wazuh's own severity assessment; the strongest discriminative signal." },
      { field: 'rule.description', reason: 'Plain-English semantic anchor and primary reasoning hook for the LLM.' },
      { field: 'rule.groups', reason: 'Functional category prior: syscheck often means FP, attack often means TP.' },
      { field: 'rule.id', reason: 'Learns rule-specific associations such as 591 log rotation FP or 5712 SSH brute force TP.' },
      { field: 'rule.firedtimes', reason: 'Temporal frequency; repeated auth failures are a brute-force signal.' },
      { field: 'rule.mitre', reason: 'Presence alone is a strong TP signal because benign events are not MITRE-mapped.' },
      { field: 'compliance tags', reason: 'Encodes asset sensitivity and co-occurrence patterns with alert categories.' },
      { field: 'decoder + location', reason: 'Identifies log source type; ossec internal management events are predominantly FP.' },
      { field: 'full_log', reason: 'Raw usernames, paths, and HTTP strings, truncated to 600 characters to avoid context overflow.' }
    ],
    sample: [
      'Timestamp      : ...',
      'Rule ID        : 5710',
      'Severity level : 10/15',
      'Description    : SSH brute force attempt',
      'Fired times    : 47',
      'Groups         : authentication_failed, syslog',
      'MITRE ATT&CK   : ID=T1110.001 | Tactic=Credential Access | Technique=Password Guessing',
      'Full log       : sshd: Failed password for invalid user admin from 116.193.190.42 port 52341'
    ]
  },
  {
    type: 'contribution-finetuning-strategy',
    title: 'Fine-Tuning Strategy — Full vs LoRA vs QLoRA',
    columns: [
      {
        title: 'Full Fine-Tuning',
        highlight: false,
        vram: '40-80 GB',
        items: [
          'All model parameters updated during training',
          'Highest possible domain adaptation',
          'Impractical on consumer hardware',
          'Risk of catastrophic forgetting'
        ]
      },
      {
        title: 'LoRA',
        highlight: false,
        vram: '14-16 GB',
        items: [
          'All original weights frozen',
          'Low-rank adapter matrices injected into attention and MLP layers',
          'Only ~50-200 MB of adapters trained',
          'Requires base model in fp16, still heavy'
        ]
      },
      {
        title: 'QLoRA - Chosen',
        highlight: true,
        vram: '~5 GB',
        items: [
          'Base model loaded in 4-bit NF4 quantization',
          'LoRA adapters trained on top in fp16',
          'Runs on a single RTX 3060 12 GB',
          '2x faster training, 60% less VRAM via Unsloth',
          'Export: merged GGUF Q4_K_M deployed via Ollama'
        ]
      }
    ],
    note: 'QLoRA makes fine-tuning an 8B LLM feasible on a single consumer GPU without sacrificing model quality.'
  },
  {
    type: 'contribution-finetuning-pipeline',
    title: 'Stage 1 — QLoRA Fine-Tuning Pipeline',
    steps: [
      {
        num: '1',
        title: 'Dataset Preparation',
        items: [
          'Load final_merged_dataset.jsonl: 738 records, 590 train, 148 test',
          'Each alert becomes a structured natural-language context block',
          'Formatted as 3-turn chat: system prompt, user alert, assistant JSON'
        ]
      },
      {
        num: '2',
        title: 'System Prompt Engineering',
        items: [
          'Conditions model as SOC triage analyst',
          'Focus signals: rule severity, groups, MITRE presence, fired times',
          'Enforces strict JSON output: { "label", "confidence", "reason" }'
        ]
      },
      {
        num: '3',
        title: 'Training Execution',
        items: [
          'Framework: Unsloth + HuggingFace SFTTrainer',
          '3 epochs, cosine LR scheduler, 10% warmup',
          'Gradient checkpointing + AdamW 8-bit optimizer'
        ]
      },
      {
        num: '4',
        title: 'Evaluation',
        items: [
          'Held-out 20% test set, then parse JSON responses',
          'Metrics: accuracy, macro F1, precision, recall, confusion matrix',
          'Compared against zero-shot LLaMA 3.1 8B baseline'
        ]
      },
      {
        num: '5',
        title: 'Model Export',
        items: [
          'LoRA adapter weights saved: 50-200 MB',
          'Merged GGUF Q4_K_M loaded by Ollama for live inference'
        ]
      }
    ],
    hyperparams: [
      { param: 'LoRA Rank (r)', value: '8' },
      { param: 'LoRA Alpha (alpha)', value: '16' },
      { param: 'Max seq length', value: '768 tokens' },
      { param: 'Batch size', value: '1 (accum: 16)' },
      { param: 'Learning rate', value: '2x10^-4' },
      { param: 'Epochs', value: '3' },
      { param: 'Optimizer', value: 'AdamW 8-bit' },
      { param: 'Scheduler', value: 'Cosine' }
    ]
  },
  {
    type: 'contribution-stage1-results-summary',
    title: 'Stage 1 Results — Classifier Performance',
    rows: [
      { model: 'Phi-3.5-mini', accuracy: '88.03%', f1: '0.9187', tpRecall: '0.9737', fpRecall: '0.7866', parseErrors: '88 / 986' },
      { model: 'Gemma-3-27B', accuracy: '96.62%', f1: '0.9621', tpRecall: '0.9792', fpRecall: '0.9600', parseErrors: 'N/A' },
      { model: 'LLaMA 3.1 8B', accuracy: '99.39%', f1: '0.9939', tpRecall: '0.9919', fpRecall: '0.9959', parseErrors: '0 / 986', winner: true },
      { model: 'LLaMA (zero-shot)', accuracy: '96.62%', f1: '-', tpRecall: '0.9792', fpRecall: '-', parseErrors: '-' }
    ],
    takeaways: [
      'LLaMA 3.1 8B fine-tuned: zero parse errors across 986 samples, perfect JSON compliance',
      'Only 4 false negatives out of 494 TPs; only 2 FPs leaked to Stage 2',
      'Phi-3.5-mini: 88 parse errors, structurally unusable in an automated pipeline',
      'Fine-tuning over zero-shot: +2.77% accuracy, confirming domain adaptation value'
    ]
  },
  {
    type: 'contribution-stage1-plots',
    title: 'Stage 1 Results — Evaluation Plots',
    images: {
      headline: '/figures/ft_headline.png',
      perclass: '/figures/ft_perclass.png',
      confusion: '/figures/ft_confusion.png',
      baseline: '/figures/ft_baseline.png'
    }
  },
  {
    type: 'contribution-stage2-prompting',
    title: 'Stage 2 — Deep Analysis & Prompting Strategy',
    whyNoFinetune: [
      'No large structured dataset pairing raw alerts with expert-written threat analyses',
      'Stage 2 runs entirely via prompting: LLaMA 3.1 8B Instruct served locally via Ollama',
      'No internet access required, which is critical for SOC data confidentiality'
    ],
    outputSchema: [
      'attack_type',
      'attack_description',
      'severity_assessment',
      'mitre_tactic',
      'mitre_technique',
      'mitre_id',
      'affected_assets',
      'iocs { ips, users, files, processes }',
      'ir_actions { immediate, short_term, long_term }',
      'escalate_to_human',
      'escalation_reason'
    ],
    rows: [
      { strategy: 'Zero-Shot', format: '46%', mitre: '64%', tokens: '380', latency: '1.8 s' },
      { strategy: 'One-Shot', format: '98%', mitre: '94%', tokens: '1,120', latency: '4.2 s', winner: true },
      { strategy: 'Few-Shot x3', format: '98%', mitre: '96%', tokens: '3,240', latency: '11.8 s' }
    ],
    reasoning: [
      { strategy: 'No: Zero-Shot', verdict: '46% format adherence: conversational preambles, markdown wrappers, missing keys, and parse failures in the DB pipeline.', color: 'red' },
      { strategy: 'No: Few-Shot', verdict: '3,240 tokens and 11.8 s per alert on RTX 3060. KV cache bottleneck makes it impractical for live SIEM streams.', color: 'blue' },
      { strategy: 'Yes: One-Shot', verdict: 'Single example anchors format and reasoning: 98% adherence at 4.2 s. Pareto-optimal for local SOC deployment.', color: 'cyan' }
    ]
  },
  {
    type: 'contribution-stage2-results',
    title: 'Stage 2 Results — Benchmarking & Escalation Policy',
    benchRows: [
      { model: 'Phi-3.5-mini', format: '78%', mitre: '72%', actionability: '70.7%', hallucination: '14.5%', latency: '2.1 s' },
      { model: 'Gemma', format: '89.3%', mitre: '82.7%', actionability: '85.3%', hallucination: '8.2%', latency: '2.8 s' },
      { model: 'LLaMA 3.1 8B', format: '98.7%', mitre: '96%', actionability: '97.3%', hallucination: '1.1%', latency: '4.2 s', winner: true }
    ],
    deployStats: [
      '100% analysis success rate: 148 / 148 alerts processed, 0 parse errors',
      'Severity: 58.8% High, 41.2% Critical; Stage 1 filtered all low-level noise',
      'Attack categories: Unauthorized Access 86.5%, Privilege Escalation 11.5%, Recon 2%',
      'Top attacker IPs: 116.193.190.42 (38 hits), 45.55.159.241 (35 hits)',
      'MITRE tactics: Credential Access (55), Credential Access + Lateral Movement (44)'
    ],
    escalationRows: [
      { policy: 'LLM-driven', count: '148 / 148', pct: '100%', impact: 'Severe over-escalation: analyst fatigue' },
      { policy: 'Hybrid rule-based', count: '70 / 148', pct: '47.3%', impact: '52.7% ticket reduction: targeted triaging', highlight: true }
    ],
    triggers: [
      'Trigger 1: Stage 1 confidence < 0.80 -> escalate classification ambiguity',
      'Trigger 2: Stage 2 severity = Critical -> escalate high-impact threat',
      'Trigger 3: Attack category in { Privilege Escalation, Lateral Movement } -> escalate'
    ]
  },
  {
    type: 'contribution-pipeline-perf',
    title: 'End-to-End Pipeline Performance',
    rows: [
      { component: 'Stage 1 — Binary Classifier', latency: '1.65 s / alert', focus: 'High-speed FP filtering; FPs stop here' },
      { component: 'Stage 2 — Deep Analysis LLM', latency: '8.45 s / alert', focus: 'Rich contextual threat profiling for TPs only' },
      { component: 'End-to-End TP Processing', latency: '10.09 s / alert', focus: 'Full triage + MITRE mapping + IR command', highlight: true }
    ],
    bullets: [
      'In typical SOCs, 90%+ of raw alerts are FPs; all filtered at Stage 1 in 1.65 s each',
      'Only confirmed TPs incur the full 10 s pipeline, so effective raw-alert capacity far exceeds 357/hr',
      'Stage 2 is analyst-triggered on-demand in live deployment, so the GPU is not under continuous load',
      'Suitable for medium-to-large corporate SOC environments'
    ],
    throughputStat: '357',
    throughputLabel: 'TP alerts / hour on RTX 3060'
  },
  {
    type: 'contribution-diagram',
    title: 'Dashboard Architecture — Use Case Diagram',
    image: '/figures/use-case.png',
    caption: 'Actors, permissions, and dashboard workflows: authentication, triage, deep analysis, label override, and administration.'
  },
  {
    type: 'contribution-diagram',
    title: 'Dashboard Architecture — Class Diagram',
    image: '/figures/class-diagram.png',
    caption: 'Core data model connecting users, labeled alerts, and LLM analysis records in the dashboard backend.'
  },
  // {
  //   type: 'contribution-dashboard-panel',
  //   title: 'SOC Dashboard — Overview',
  //   stack: [
  //     { label: 'FastAPI (Python 3.12)', desc: 'Async backend · JWT auth · RBAC · OpenAPI docs' },
  //     { label: 'PostgreSQL (wazuhdb)', desc: '3 tables: labeled_alerts · llm_analysis · users' },
  //     { label: 'Vanilla HTML5 / JS / CSS3', desc: 'Dark theme · SPA · near-instant load · no framework overhead' }
  //   ],
  //   panel: {
  //     num: '1',
  //     title: 'Overview — KPIs & Attack Distribution',
  //     items: [
  //       'Total alerts, TP/FP counts + percentages',
  //       'Analyses run + avg LLM latency',
  //       'Attack distribution breakdown',
  //       'Recent analyses with MITRE tactic badges'
  //     ],
  //     image: '/figures/dashboard_overview.png'
  //   }
  // },
  // {
  //   type: 'contribution-dashboard-panel',
  //   title: 'SOC Dashboard — Labeled Alerts',
  //   stack: [
  //     { label: 'FastAPI (Python 3.12)', desc: 'Async backend · JWT auth · RBAC · OpenAPI docs' },
  //     { label: 'PostgreSQL (wazuhdb)', desc: '3 tables: labeled_alerts · llm_analysis · users' },
  //     { label: 'Vanilla HTML5 / JS / CSS3', desc: 'Dark theme · SPA · near-instant load · no framework overhead' }
  //   ],
  //   panel: {
  //     num: '2',
  //     title: 'Labeled Alerts — Triage List',
  //     items: [
  //       'Paginated table of all triaged alerts',
  //       'Color-coded TP / FP badges',
  //       'View raw JSON and trigger Stage 2',
  //       'Toggle label override, delete, bulk FP purge'
  //     ],
  //     image: '/figures/dashboard_labeled_alerts.png'
  //   }
  // },
  // {
  //   type: 'contribution-dashboard-panel',
  //   title: 'SOC Dashboard — LLM Analysis',
  //   stack: [
  //     { label: 'FastAPI (Python 3.12)', desc: 'Async backend · JWT auth · RBAC · OpenAPI docs' },
  //     { label: 'PostgreSQL (wazuhdb)', desc: '3 tables: labeled_alerts · llm_analysis · users' },
  //     { label: 'Vanilla HTML5 / JS / CSS3', desc: 'Dark theme · SPA · near-instant load · no framework overhead' }
  //   ],
  //   panel: {
  //     num: '3',
  //     title: 'LLM Analysis — Threat Reports',
  //     items: [
  //       'Attack type + MITRE tactic badge per alert',
  //       'IR command in console-styled green block',
  //       '50-word threat description on View',
  //       'Copy IR command for fast containment'
  //     ],
  //     image: '/figures/dashboard_llm_analysis.png'
  //   }
  // },
  // {
  //   type: 'contribution-dashboard-panel',
  //   title: 'SOC Dashboard — User Management',
  //   stack: [
  //     { label: 'FastAPI (Python 3.12)', desc: 'Async backend · JWT auth · RBAC · OpenAPI docs' },
  //     { label: 'PostgreSQL (wazuhdb)', desc: '3 tables: labeled_alerts · llm_analysis · users' },
  //     { label: 'Vanilla HTML5 / JS / CSS3', desc: 'Dark theme · SPA · near-instant load · no framework overhead' }
  //   ],
  //   panel: {
  //     num: '4',
  //     title: 'User Management — Access Control',
  //     items: [
  //       'Admin-only panel with RBAC enforcement',
  //       'View all accounts, roles, active status',
  //       'Create / delete analyst accounts',
  //       'pbkdf2_sha256 hashed passwords'
  //     ],
  //     image: '/figures/dashboard_user_management.png'
  //   }
  // },
  {
    type: 'contribution-related-work-comparison',
    title: 'Comparison with Related Work',
    headers: ['System', 'FP Reduction', 'Explainability', 'Deep Reasoning', 'MITRE Mapping', 'IR Actions', 'Live Dashboard'],
    rows: [
      { system: 'Classical ML / DL systems', capabilities: ['YES', 'NO', 'NO', 'NO', 'NO', 'NO'] },
      { system: 'Wazuh LLM Classifier', capabilities: ['YES', 'NO', 'NO', 'NO', 'NO', 'NO'] },
      { system: 'SERC / RAG LLM copilots', capabilities: ['NO', 'YES', 'YES', 'YES', 'YES', 'NO'] },
      { system: 'Autonomous IR / SEvenLLM', capabilities: ['NO', 'YES', 'YES', 'YES', 'YES', 'NO'] },
      { system: 'Our System', capabilities: ['YES', 'YES', 'YES', 'YES', 'YES', 'YES'], highlight: true }
    ],
    note: 'Our contribution combines the missing pieces: false-positive filtering, structured LLM reasoning, MITRE mapping, IR action generation, and an operational dashboard in one local pipeline.'
  },
  {
    type: 'section-divider',
    num: '5',
    title: 'Conclusion'
  },
  {
    type: 'conclusion',
    title: 'Conclusion & Future Outlook',
    contributions: [
      {
        title: 'Validated 2-Stage Architecture',
        desc: 'First system to combine dedicated TP/FP filtering with deep structured threat reasoning.'
      },
      {
        title: 'Fine-tuned Wazuh Classifier',
        desc: 'LLaMA 3.1-8B model achieving 99.39% accuracy, optimized for local SOC inference.'
      },
      {
        title: 'Hybrid Escalation Policy',
        desc: 'Deterministic mechanism reducing analyst ticket volume by 52.7% while ensuring safety.'
      }
    ],
    futures: [
      {
        title: 'Continuous Learning Loop',
        desc: 'Periodic retraining using analyst feedback to adapt to environment-specific patterns.'
      },
      {
        title: 'SOAR Integration',
        desc: 'Automated execution of containment actions via platforms like Shuffle or TheHive.'
      },
      {
        title: 'Autonomous SOC Tier',
        desc: 'Fully autonomous Tier-1 layer for low-risk, high-confidence threat categories.'
      }
    ],
    quote: 'The answer to alert fatigue is a system that reads every alert with the same attention a senior analyst would.'
  },
  {
    type: 'closing-text',
    title: 'Demonstration',
    subtitle: 'Live pipeline walkthrough'
  },
  {
    type: 'closing-text',
    title: 'Thank You',
    subtitle: 'Questions?'
  }
];
