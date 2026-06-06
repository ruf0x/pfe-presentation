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
      { num: '5', title: 'Results', desc: 'Performance Metrics, Key Findings' },
      { num: '6', title: 'Conclusion', desc: 'Results, Performance, Future Outlook' }
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
    type: 'soa-gap',
    title: 'Comparative Analysis — The Gap We Fill',
    headers: ['System', 'FP Reduction', 'Explainability', 'Deep Reasoning', 'MITRE Mapping', 'IR Actions'],
    rows: [
      { system: 'ML/DL systems', capabilities: ['YES', 'NO', 'NO', 'NO', 'NO'] },
      { system: 'Wazuh LLM Classifier', capabilities: ['YES', 'NO', 'NO', 'NO', 'NO'] },
      { system: 'SERC', capabilities: ['NO', 'YES', 'YES', 'YES', 'YES'] },
      { system: 'Autonomous IR / SEvenLLM', capabilities: ['NO', 'YES', 'YES', 'YES', 'YES'] },
      { system: 'Our System', capabilities: ['YES', 'YES', 'YES', 'YES', 'YES'], highlight: true }
    ],
    gap: 'ML systems filter noise but explain nothing. LLM analysis systems reason deeply but process every alert, including false positives, wasting inference.',
    contribution: 'A two-stage pipeline: a fine-tuned classifier gates the expensive reasoning LLM, so only confirmed true positives reach Stage 2.'
  },
  {
    type: 'section-divider',
    num: '4',
    title: 'Contribution'
  },
  {
    type: 'architecture',
    title: 'Proposed Two-Stage Pipeline Architecture',
    stages: [
      { title: 'Wazuh SIEM', content: 'Endpoints & Network logs • Rule-based detection • Raw Alert Generation' },
      { title: 'Stage 1: Binary Classifier', content: 'Fine-tuned Llama-3-8B • TP / FP Filtering • Local GGUF Inference' },
      { title: 'Stage 2: Deep Analyzer', content: 'Few-shot Reasoning • MITRE Mapping • IR Action Generation' },
      { title: 'SOC Dashboard', content: 'PostgreSQL Persistence • Real-time Triage View • Command Execution' }
    ],
    features: [
      '100% Local Execution via Ollama (No External APIs)',
      'FP alerts stopped at Stage 1 to save compute',
      'Stage 2 triggered on-demand for human oversight',
      'Full relational integrity with 3-table PostgreSQL schema'
    ]
  },
  {
    type: 'dataset',
    title: 'Dataset & Feature Engineering',
    dataSource: [
      { source: 'kholil-lil/wazuh-alerts', contribution: '700 labeled alerts (TP/FP foundation)' },
      { source: 'AIT Alert Dataset', contribution: 'Large-scale simulated attack scenarios' },
      { source: 'Personal Lab Logs', contribution: 'Real-world noise & environment behavior' }
    ],
    dataNote: 'Total: 738 clean records after merging and cleaning. Stratified 80/20 split used for training and testing.',
    preprocessing: [
      { step: '1', title: 'JSON Normalization', desc: 'Parse raw stringified JSON and normalize labels to binary TP/FP.' },
      { step: '2', title: 'Context Construction', desc: 'Extract high-signal fields into a flat template.' },
      { step: '3', title: 'MITRE Mapping', desc: 'Extract and append MITRE IDs, tactics, and techniques.' },
      { step: '4', title: 'Compliance Tracking', desc: 'Preserve PCI-DSS, GDPR, and NIST tags.' },
      { step: '5', title: 'Log Truncation', desc: 'Cap raw logs at 600 characters to prevent context window exhaustion.' }
    ]
  },
  {
    type: 'finetuning',
    title: 'Stage 1: Fine-Tuning the Classifier',
    approach: {
      title: 'Approach: QLoRA via Unsloth',
      items: [
        { title: 'Efficiency & Speed', desc: 'Used Unsloth framework for 2× faster training and 60% less VRAM usage. Base model kept frozen in 4-bit quantization.' },
        { title: 'PEFT Technique', desc: 'LoRA adapters injected into attention and MLP layers. Only 50–200 MB of adapter weights updated.' }
      ]
    },
    hyperparameters: {
      hardware: [
        { param: 'Hardware', value: 'NVIDIA RTX 3060 (12 GB VRAM)' },
        { param: 'LoRA Rank (r)', value: '8' },
        { param: 'LoRA Alpha (α)', value: '16' },
        { param: 'Max Sequence Length', value: '768 tokens' }
      ],
      training: [
        { param: 'Learning Rate', value: '2 × 10⁻⁴' },
        { param: 'LR Scheduler', value: 'Cosine' },
        { param: 'Optimizer', value: 'AdamW 8-bit' },
        { param: 'Epochs', value: '3' },
        { param: 'Gradient Accumulation', value: '16 steps' }
      ]
    }
  },
  {
    type: 'section-divider',
    num: '5',
    title: 'Results'
  },
  {
    type: 'results',
    title: 'Key Results & Performance',
    stage1: [
      { metric: '99.39%', label: 'Classification Accuracy on 986 test alerts' },
      { metric: '0.9919', label: 'True Positive Recall (Only 4 genuine threats missed)' },
      { metric: '1.65s', label: 'Average Triage Latency' }
    ],
    stage2: [
      { metric: '96%', label: 'MITRE Mapping Accuracy' },
      { metric: '52.7%', label: 'Reduction in Analyst Ticket Volume' }
    ]
  },
  {
    type: 'section-divider',
    num: '6',
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
  }
];
