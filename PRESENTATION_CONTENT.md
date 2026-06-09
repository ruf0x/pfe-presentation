# AI Based Wazuh Alert Classifier and Analyser Using LLM

**Full presentation content export** — use each `## Slide N` block as one slide. Images are in brackets for separate attachment.

**Presenter:** Cherrak Ismail Anis  
**Specialty:** ISI  
**Supervisor:** Dr M.Baba-Ahmed

---

## Slide 1 — Title

**AI BASED WAZUH ALERT CLASSIFIER AND ANALYSER USING LLM**

- **Presented by:** Cherrak Ismail Anis
- **Specialty:** ISI
- **Supervised by:** Dr M.Baba-Ahmed

---

## Slide 2 — Contents

**Contents**

| # | Section | Description |
|---|---------|-------------|
| 1 | Introduction | Context, Problem Statement, Objectives |
| 2 | Background | Wazuh, MITRE ATT&CK, LLM Strategies |
| 3 | State-of-the-Art | Existing Solutions, Gap Analysis |
| 4 | Contribution | Proposed Architecture, Dataset, Fine-Tuning |
| 5 | Conclusion | Summary, Performance, Future Outlook |

---

## Slide 3 — Section Divider

**1 — Introduction**

---

## Slide 4 — Wazuh SIEM/XDR Platform

**Wazuh SIEM/XDR Platform**

### Wazuh Overview

An open-source, enterprise-grade security monitoring platform combining SIEM and XDR capabilities to detect, analyze, and respond to threats.

- **Agent-Based Collection:** Lightweight agent monitors files, processes, configurations, and system logs.
- **Real-time Rules Engine:** Processes logs via decoders and triggers alerts based on hundreds of built-in rule files.
- **Security Analytics:** Detects anomalies, hidden malware, policy violations, and system vulnerabilities.
- **Active Response Actions:** Automates remediation (e.g., firewall block, service restart, host isolation) upon detection.
- **Unified XDR Features:** Integrates endpoint protection with cloud monitoring, container security, and log auditing.

> *"Wazuh serves as our primary detection engine, feeding telemetry into the AI triage pipeline."*

---

## Slide 5 — The Alert Fatigue Crisis

**The Alert Fatigue Crisis**

### Volume Overload
Modern SIEMs like Wazuh generate thousands of alerts daily, overwhelming SOC analysts and burying critical signals.

### False Positive Burden
Analysts spend over 25% of their time investigating events that turn out to be benign, leading to wasted resources.

**Stat:** **45%** — False Positives in typical SOC environment

### Critical Consequences
Alert fatigue leads to missed threats, slow response times, and high operational costs.

---

## Slide 6 — Project Objectives

**Project Objectives**

### 🎯 Automated Classification
Build a fine-tuned LLM-based binary classifier that automatically distinguishes True Positive alerts from False Positives, reducing workload at the first stage of triage.

### 🔍 Deep Threat Analysis
Deploy a few-shot LLM to produce MITRE ATT&CK mapping, natural language threat descriptions, and concrete Incident Response action recommendations.

### 🌐 Integrated Web App
Deliver the full pipeline as a production-ready web application with a custom dashboard for SOC analysts to monitor, review, and act on alerts in real time.

---

## Slide 7 — Section Divider

**2 — Background**

---

## Slide 8 — Security Operations Center (SOC) & Blue Team

**Security Operations Center (SOC) & Blue Team**

### SOC Mission
- SOC is the centralized unit responsible for continuous monitoring, detection, and response to cybersecurity threats.
- **Blue team:** Defensive security: analysts triage alerts, investigate incidents, and enforce security policies.
- Key SOC roles usually escalate from L1 alert triage to L2 investigation, then L3 threat hunting and incident response.
- **Core challenge:** Alert fatigue. Modern SOCs receive thousands of alerts per day, with many environments seeing 40–60% false positives.
- Manual triage is slow, error-prone, and unsustainable at scale, which motivates automation.

### Triage Chain
- **L1:** Alert triage
- **L2:** Investigation
- **L3:** Threat hunting / IR

*Alert fatigue makes manual triage slow, inconsistent, and hard to scale.*

---

## Slide 9 — SIEM Systems in the SOC Workflow

**SIEM Systems in the SOC Workflow**

### SIEM Role
SIEM means Security Information and Event Management. It aggregates logs from endpoints, networks, servers, and applications, then correlates events and generates alerts.

**Functions:**
- Log collection and normalization across heterogeneous sources.
- Real-time correlation and alert generation.
- Compliance reporting and forensic investigation support.
- Central analyst view for search, dashboards, and cases.

**Flow:** Logs → SIEM → Analyst

### Traditional Limits
- Traditional detections are mostly rule-based.
- High false-positive rate increases analyst workload.
- Limited contextual understanding of ambiguous alerts.
- No native automated response or reasoning layer.

---

## Slide 10 — Threats Detected by SIEM Systems

**Threats Detected by SIEM Systems**

| Attack Category | Examples |
|-----------------|----------|
| Brute Force / Auth Attacks | SSH/RDP brute force, credential stuffing |
| Lateral Movement | Pass-the-hash, Kerberoasting |
| Privilege Escalation | Sudo abuse, token impersonation |
| Persistence | Scheduled tasks, cron jobs, registry keys |
| Data Exfiltration | Unusual outbound traffic, DNS tunneling |
| Malware / C2 | Beacon traffic, known malicious IPs |
| Web Attacks | SQLi, XSS, directory traversal |

*MITRE ATT&CK maps these behaviors to tactics and techniques, which is used later in the Stage 2 LLM analysis.*

---

## Slide 11 — Wazuh Architecture — Core Components

**Wazuh Architecture — Core Components**

### ◆ Wazuh Agent
- Lightweight daemon installed on monitored endpoints.
- Collects system logs, auth logs, syslog, and Windows Event Logs.
- Runs FIM, rootkit detection, vulnerability scanning, and Auditd syscall auditing.
- Communicates with the manager over an encrypted channel on port 1514.

### ◇ Wazuh Manager
- Central brain that receives, decodes, and analyzes agent data.
- Applies 5000+ XML-based built-in rules, with full customization.
- Pipeline: ingestion, decoder, rule engine, alert generation.
- Assigns severity 0–15, MITRE tags, and compliance mappings.

### ⬢ Indexer & Dashboard
- Indexer is OpenSearch-based and stores alerts as JSON documents.
- Dashboard provides visualization, search, and case management.
- REST API exposes alerts for external integrations.
- Our collector uses this API as the entry point to the AI pipeline.

---

## Slide 12 — Wazuh Architecture — Alert Pipeline & Rule Engine

**Wazuh Architecture — Alert Pipeline & Rule Engine**

### Alert Flow
1. Event occurs on an endpoint, such as a failed SSH login.
2. Agent captures the log entry in real time.
3. Manager decoder parses the raw log and extracts fields like user, IP, action, and status.
4. Rule engine matches decoded fields against the rule tree.
5. Alert is generated with rule ID, description, severity, groups, and MITRE tags.
6. Alert is forwarded to the Indexer and stored as a JSON document.
7. Dashboard renders the alert for analysts, while the API exposes it for external tools.

### Rule System
- Rules are identified by numeric IDs, such as 9701 for Dovecot auth success or 5710 for SSH brute force.
- Each rule has a severity level from 0–15, groups, description, and decoder reference.
- Rules can be chained through parent and composite frequency-based logic.
- rip and lip fields are extracted for rule logic and are critical in our rule 9701 hybrid override.

---

## Slide 13 — AI-Augmented SIEM

**AI-Augmented SIEM**

### Why AI?
- Rule-based SIEMs cannot generalize well to novel attacks.
- Machine learning supports behavioral baselines, anomaly detection, and false-positive reduction.
- LLMs add contextual reasoning, natural language explanation, and threat narrative generation.

### Literature Approaches
| Approach | Description |
|----------|-------------|
| Classical ML | Random Forest and XGBoost for alert classification and FP/TP scoring. |
| Deep Learning | LSTM and Transformer models for sequence-based anomaly detection in logs. |
| LLMs | GPT, LLaMA, and fine-tuned models for triage, IR recommendation, and log summarization. |

### In Wazuh
- Wazuh has no native ML or LLM pipeline, so integration must be custom-built.
- Our collector queries Wazuh alerts and sends them to Stage 1 fine-tuned LLM classification.
- Stage 2 few-shot LLM adds MITRE mapping and incident-response advice.
- PostgreSQL stores verdicts, analysis, and analyst-facing outcomes.

---

## Slide 14 — Section Divider

**3 — State-of-the-Art**

---

## Slide 15 — Approaches to Automated Alert Triage

**Approaches to Automated Alert Triage**

| # | Paradigm | Description |
|---|----------|-------------|
| 1 | Classical ML | Random Forest, DBSCAN, and Isolation Forest applied to structured SIEM features. High accuracy, real-time throughput, zero explainability. |
| 2 | Deep Learning | CNN-LSTM hybrids, attention mechanisms, and optimized LSTMs for temporal sequence modeling. Higher accuracy, still opaque. |
| 3 | Fine-tuned LLMs | LLaMA, Gemma, and BERT variants trained on labeled alert data for TP/FP classification with semantic understanding of raw alert JSON. |
| 4 | RAG LLM Copilots | LLMs grounded in MITRE ATT&CK and NIST CSF via vector retrieval. Analyst-readable narratives, MITRE mapping, and IR recommendations. |

*Each paradigm is progressively more capable but computationally heavier. No prior work combines all four capabilities in one live Wazuh pipeline.*

---

## Slide 16 — Datasets Enabling This Research

**Datasets Enabling This Research**

### kholil-lil/wazuh-alerts
*Hugging Face, MIT*

- Raw Wazuh alert JSON records labeled True Positive or False Positive.
- Alpaca instruction-tuning format: instruction plus alert JSON to TP/FP label.
- Covers SSH brute force, log rotation false positives, and active-response false positives.
- Used directly for supervised fine-tuning of our Stage 1 model.

### AIT Alert Data Set
*Zenodo, CC BY 4.0*

- 2.65M alerts across Wazuh, Suricata, and AMiner sources.
- Eight simulated attack scenarios from reconnaissance to exfiltration.
- Temporal labels separate attack phases from benign activity.
- Large-scale benchmark for alert correlation and filtering evaluation.

---

## Slide 17 — Classical ML & Deep Learning for Alert Classification

**Classical ML & Deep Learning for Alert Classification**

| System | Method | Accuracy | Limitation |
|--------|--------|----------|------------|
| ML-Enhanced Wazuh | RF + DBSCAN + Isolation Forest | 97.2% | No explainability |
| Proactive SIEM | PCA + ICA + LSTM on Wazuh data | Improved baseline | No explainability |
| ESN-RF Adaptive | Echo State Net + TF-IDF + RF | 99.5% | Generic SIEM dataset |
| CNN-LSTM IoT IDS | Spatial + temporal hybrid | 98.42% / F1 98.57% | FPR 9.17% |
| Attention-CNN-LSTM | Self-attention + CNN + LSTM | 94.8–97.5% | No IR output |
| Xavier-CMAE | CNN + Multi-Head Attention | 99.971% / FPR 0.018% | No semantic reasoning |

**Takeaway:** Classical ML can reach real-time throughput at high accuracy, but these approaches remain black boxes with no threat narrative output.

---

## Slide 18 — LLM-Based Alert Classification & Threat Analysis

**LLM-Based Alert Classification & Threat Analysis**

### LLM Classifiers
| Work | Description |
|------|-------------|
| kholil-lil/wazuh-model | LLaMA 3.1 8B with LoRA, 92% accuracy on Wazuh alerts. Binary only, no reasoning. |
| Noa et al. | Local LLMs versus classical ML: LLM F1 = 0.928 vs XGBoost F1 = 0.555, strong evidence for LLM-first triage. |
| CAN-LLAMA2 | LLaMA 2 fine-tuned for IDS with 99.9993% accuracy and FAR 3.1e-6. |

### LLM Analysis Systems
| Work | Description |
|------|-------------|
| SERC | Wazuh ingestion plus RAG over MITRE ATT&CK and NIST CSF for analyst narratives. No upstream FP filter. |
| HuntGPT | RF classifier with SHAP/LIME and GPT-3.5 explanation layer. Early ML plus LLM hybrid. |
| Autonomous IR | RAG with CTI retrieval from MISP/OTX to produce mitigation strategies on LogPoint alerts. |
| ATT&CK Insights | LLM maps raw IDS logs to MITRE tactics and adversarial behavioral traits. |

---

## Slide 19 — Section Divider

**4 — Contribution**

---

## Slide 20 — Motivation — Why This System?

**Motivation — Why This System?**

### The Problem
- SOCs face thousands to millions of Wazuh alerts daily, with most alerts becoming false positives.
- Rule-based triage is static: it cannot adapt to evolving attacks or explain its decisions.
- Classical ML classifiers reach high accuracy but remain black boxes with no narrative, MITRE mapping, or IR guidance.
- Result: alert fatigue, increased MTTD, and genuine threats buried in noise.

### The Gap
- Existing LLM classifiers, such as kholil-lil/wazuh-model, only produce binary labels.
- Existing LLM analysis tools, such as SERC, process every alert including false positives.
- No prior system filters FPs and produces structured threat intelligence in one live pipeline.

### Our Answer
- A two-stage automated pipeline: a fine-tuned LLM gates traffic, then a prompted LLM reasons about confirmed threats.
- Runs fully locally on consumer GPU hardware with no cloud dependency or data leakage risk.
- Outputs TP/FP label, MITRE ATT&CK mapping, attack description, and exact IR command into PostgreSQL and a custom dashboard.

---

## Slide 21 — Pipeline Architecture

**Pipeline Architecture**

[IMAGE: /pipeline.png — Two-stage Wazuh LLM alert analysis pipeline diagram]

**Caption / flow labels:**
- **Wazuh Manager:** continuously generates alerts, then collector.py polls them every second.
- **Stage 1 — Fine-tuned LLM:** LLaMA 3.1 8B with QLoRA served via Ollama classifies each alert as TP or FP and writes label, confidence, and reason to labeled_alerts.
- **FP path:** stores the alert immediately with no further processing, eliminating analyst workload for obvious noise.
- **Stage 2 — Prompted LLM:** analyst-triggered one-shot analysis returns attack type, MITRE tactic/technique, description, and IR command into llm_analysis.
- **Dashboard:** FastAPI plus vanilla HTML/JS gives unified alerts, real-time KPIs, one-click analysis, label override, and bulk FP purge.

---

## Slide 22 — Dataset — Construction & Sources

**Dataset — Construction & Sources**

### 1. kholil-lil/wazuh-alerts
*Hugging Face, MIT*
- ~700 pre-labeled Wazuh alerts in Alpaca format: instruction, raw JSON input, and TP/FP output.
- Used directly as the corpus foundation with no structural transformation needed.

### 2. AIT-ADS
*2.6M records, Wazuh subset only*
- Filtered to Wazuh-only rows where name_decoder is non-null; labels normalized to canonical form.
- Balanced sampling: 100 TP and 100 FP via stratified random selection to avoid class skew.
- Alpaca-wrapped with the same instruction field.

### 3. Personal Wazuh Instance
*Live lab environment*
- Raw alerts.json exports covering Windows Event Channel, SSH auth, FIM, and log rotation events.
- Anonymized agent.name, agent.id, agent.ip, and manager fields before training.
- Manually labeled by the author using environment knowledge, then Alpaca-wrapped.

**Summary:**
| Metric | Value |
|--------|-------|
| Clean records | 738 |
| Training split | 590 |
| Test split | 148 |

---

## Slide 23 — Why Not Classical ML? — AIT Dataset Analysis

**Why Not Classical ML? — AIT Dataset Analysis**

| Metric | Value | Description |
|--------|-------|-------------|
| Total records | 2.65M | Large scale, but heavily skewed across 11 classes. |
| dirb class | 64.30% | 1,671,940 rows are web directory scanning. |
| benign class | 33.95% | 882,739 rows dominate the negative class. |
| Other attacks | 1.75% | Only 45,584 rows cover all remaining attack types. |

### Binary classification problem
- dirb makes up 97.35% of the True Positive class under binary classification.
- Rare but critical attacks are tiny: reverse_shell 80, webshell 109, privilege_escalation 158, service_stop 4.
- A classical model can score high validation accuracy while being blind to the attacks that matter most.

### Conclusion
- Statistical classifiers minimize loss, so they optimize for the dominant class.
- High reported accuracy creates a misleading false sense of security.
- LLMs bring pretrained semantic understanding of logs and security concepts, making them more robust to rare critical attacks.

[IMAGE: /03_dirb_benign_dominance_donut.png — AIT dataset dirb and benign dominance donut chart]

[IMAGE: /04_binary_true_positive_composition.png — True positive class composition chart]

---

## Slide 24 — Alert Preprocessing — What the Model Reads

**Alert Preprocessing — What the Model Reads**

Each raw Wazuh JSON alert is flattened into a structured natural-language context block. The model sees high-signal fields that preserve both security semantics and raw evidence.

| Field | Why it matters |
|-------|----------------|
| rule.level /15 | Wazuh's own severity assessment; the strongest discriminative signal. |
| rule.description | Plain-English semantic anchor and primary reasoning hook for the LLM. |
| rule.groups | Functional category prior: syscheck often means FP, attack often means TP. |
| rule.id | Learns rule-specific associations such as 591 log rotation FP or 5712 SSH brute force TP. |
| rule.firedtimes | Temporal frequency; repeated auth failures are a brute-force signal. |
| rule.mitre | Presence alone is a strong TP signal because benign events are not MITRE-mapped. |
| compliance tags | Encodes asset sensitivity and co-occurrence patterns with alert categories. |
| decoder + location | Identifies log source type; ossec internal management events are predominantly FP. |
| full_log | Raw usernames, paths, and HTTP strings, truncated to 600 characters to avoid context overflow. |

### Sample model input
```
Timestamp      : ...
Rule ID        : 5710
Severity level : 10/15
Description    : SSH brute force attempt
Fired times    : 47
Groups         : authentication_failed, syslog
MITRE ATT&CK   : ID=T1110.001 | Tactic=Credential Access | Technique=Password Guessing
Full log       : sshd: Failed password for invalid user admin from 116.193.190.42 port 52341
```

*Structured enough for learning, semantic enough for LLM reasoning.*

---

## Slide 25 — Fine-Tuning Strategy — Full vs LoRA vs QLoRA

**Fine-Tuning Strategy — Full vs LoRA vs QLoRA**

### Full Fine-Tuning
**VRAM:** 40–80 GB
- All model parameters updated during training
- Highest possible domain adaptation
- Impractical on consumer hardware
- Risk of catastrophic forgetting

### LoRA
**VRAM:** 14–16 GB
- All original weights frozen
- Low-rank adapter matrices injected into attention and MLP layers
- Only ~50–200 MB of adapters trained
- Requires base model in fp16, still heavy

### QLoRA — Chosen ✓
**VRAM:** ~5 GB
- Base model loaded in 4-bit NF4 quantization
- LoRA adapters trained on top in fp16
- Runs on a single RTX 3060 12 GB
- 2× faster training, 60% less VRAM via Unsloth
- Export: merged GGUF Q4_K_M deployed via Ollama

*QLoRA makes fine-tuning an 8B LLM feasible on a single consumer GPU without sacrificing model quality.*

---

## Slide 26 — Stage 1 — QLoRA Fine-Tuning Pipeline

**Stage 1 — QLoRA Fine-Tuning Pipeline**

### Step 1 — Dataset Preparation
- Load final_merged_dataset.jsonl: 738 records, 590 train, 148 test
- Each alert becomes a structured natural-language context block
- Formatted as 3-turn chat: system prompt, user alert, assistant JSON

### Step 2 — System Prompt Engineering
- Conditions model as SOC triage analyst
- Focus signals: rule severity, groups, MITRE presence, fired times
- Enforces strict JSON output: `{ "label", "confidence", "reason" }`

### Step 3 — Training Execution
- Framework: Unsloth + HuggingFace SFTTrainer
- 3 epochs, cosine LR scheduler, 10% warmup
- Gradient checkpointing + AdamW 8-bit optimizer

### Step 4 — Evaluation
- Held-out 20% test set, then parse JSON responses
- Metrics: accuracy, macro F1, precision, recall, confusion matrix
- Compared against zero-shot LLaMA 3.1 8B baseline

### Step 5 — Model Export
- LoRA adapter weights saved: 50–200 MB
- Merged GGUF Q4_K_M loaded by Ollama for live inference

### Key Hyperparameters
| Parameter | Value |
|-----------|-------|
| LoRA Rank (r) | 8 |
| LoRA Alpha (alpha) | 16 |
| Max seq length | 768 tokens |
| Batch size | 1 (accum: 16) |
| Learning rate | 2×10⁻⁴ |
| Epochs | 3 |
| Optimizer | AdamW 8-bit |
| Scheduler | Cosine |

---

## Slide 27 — Stage 1 Results — Classifier Performance

**Stage 1 Results — Classifier Performance**

| Model | Accuracy | Macro F1 | TP Recall | FP Recall | Parse Errors |
|-------|----------|----------|-----------|-----------|--------------|
| Phi-3.5-mini | 88.03% | 0.9187 | 0.9737 | 0.7866 | 88 / 986 |
| Gemma-3-27B | 96.62% | 0.9621 | 0.9792 | 0.9600 | N/A |
| **LLaMA 3.1 8B** ✓ | **99.39%** | **0.9939** | **0.9919** | **0.9959** | **0 / 986** |
| LLaMA (zero-shot) | 96.62% | — | 0.9792 | — | — |

### Key Takeaways
- LLaMA 3.1 8B fine-tuned: zero parse errors across 986 samples, perfect JSON compliance
- Only 4 false negatives out of 494 TPs; only 2 FPs leaked to Stage 2
- Phi-3.5-mini: 88 parse errors, structurally unusable in an automated pipeline
- Fine-tuning over zero-shot: +2.77% accuracy, confirming domain adaptation value

---

## Slide 28 — Stage 1 Results — Evaluation Plots

**Stage 1 Results — Evaluation Plots**

[IMAGE: /figures/ft_headline.png — Headline Metrics]

[IMAGE: /figures/ft_perclass.png — Per-Class Metrics]

[IMAGE: /figures/ft_confusion.png — Confusion Matrix]

[IMAGE: /figures/ft_baseline.png — Fine-Tuned vs Baseline]

---

## Slide 29 — Stage 2 — Deep Analysis & Prompting Strategy

**Stage 2 — Deep Analysis & Prompting Strategy**

### Why no fine-tuning?
- No large structured dataset pairing raw alerts with expert-written threat analyses
- Stage 2 runs entirely via prompting: LLaMA 3.1 8B Instruct served locally via Ollama
- No internet access required, which is critical for SOC data confidentiality

### Output schema (11 fields)
attack_type, attack_description, severity_assessment, mitre_tactic, mitre_technique, mitre_id, affected_assets, iocs { ips, users, files, processes }, ir_actions { immediate, short_term, long_term }, escalate_to_human, escalation_reason

### Prompting strategy comparison
| Strategy | Format | MITRE | Tokens | Latency |
|----------|--------|-------|--------|---------|
| Zero-Shot | 46% | 64% | 380 | 1.8 s |
| **One-Shot** ✓ | **98%** | **94%** | **1,120** | **4.2 s** |
| Few-Shot ×3 | 98% | 96% | 3,240 | 11.8 s |

### Decision rationale
- **No: Zero-Shot** — 46% format adherence: conversational preambles, markdown wrappers, missing keys, and parse failures in the DB pipeline.
- **No: Few-Shot** — 3,240 tokens and 11.8 s per alert on RTX 3060. KV cache bottleneck makes it impractical for live SIEM streams.
- **Yes: One-Shot** — Single example anchors format and reasoning: 98% adherence at 4.2 s. Pareto-optimal for local SOC deployment.

---

## Slide 30 — Stage 2 Results — Benchmarking & Escalation Policy

**Stage 2 Results — Benchmarking & Escalation Policy**

### Model Benchmark — N=150 TP alerts
| Model | Format | MITRE | Actionability | Hallucination | Latency |
|-------|--------|-------|---------------|---------------|---------|
| Phi-3.5-mini | 78% | 72% | 70.7% | 14.5% | 2.1 s |
| Gemma | 89.3% | 82.7% | 85.3% | 8.2% | 2.8 s |
| **LLaMA 3.1 8B** ✓ | **98.7%** | **96%** | **97.3%** | **1.1%** | **4.2 s** |

### Deployment — 148 confirmed TPs
- 100% analysis success rate: 148 / 148 alerts processed, 0 parse errors
- Severity: 58.8% High, 41.2% Critical; Stage 1 filtered all low-level noise
- Attack categories: Unauthorized Access 86.5%, Privilege Escalation 11.5%, Recon 2%
- Top attacker IPs: 116.193.190.42 (38 hits), 45.55.159.241 (35 hits)
- MITRE tactics: Credential Access (55), Credential Access + Lateral Movement (44)

### Escalation Policy Comparison
| Policy | Escalated | % | Impact |
|--------|-----------|---|--------|
| LLM-driven | 148 / 148 | 100% | Severe over-escalation: analyst fatigue |
| **Hybrid rule-based** ✓ | **70 / 148** | **47.3%** | **52.7% ticket reduction: targeted triaging** |

### Hybrid Policy — 3 Triggers
1. Stage 1 confidence < 0.80 → escalate classification ambiguity
2. Stage 2 severity = Critical → escalate high-impact threat
3. Attack category in { Privilege Escalation, Lateral Movement } → escalate

*52.7% ticket reduction — from 148 to 70 escalations — without compromising safety.*

---

## Slide 31 — End-to-End Pipeline Performance

**End-to-End Pipeline Performance**

| Component | Avg Latency | Focus |
|-----------|-------------|-------|
| Stage 1 — Binary Classifier | 1.65 s / alert | High-speed FP filtering; FPs stop here |
| Stage 2 — Deep Analysis LLM | 8.45 s / alert | Rich contextual threat profiling for TPs only |
| **End-to-End TP Processing** | **10.09 s / alert** | **Full triage + MITRE mapping + IR command** |

### Why this works in a real SOC
- In typical SOCs, 90%+ of raw alerts are FPs; all filtered at Stage 1 in 1.65 s each
- Only confirmed TPs incur the full 10 s pipeline, so effective raw-alert capacity far exceeds 357/hr
- Stage 2 is analyst-triggered on-demand in live deployment, so the GPU is not under continuous load
- Suitable for medium-to-large corporate SOC environments

**Throughput:** **357** TP alerts / hour on RTX 3060

**Stat:** **90%+** of raw alerts filtered in 1.65 s — analysts only review confirmed threats

---

## Slide 32 — Dashboard Architecture — Use Case Diagram

**Dashboard Architecture — Use Case Diagram**

[IMAGE: /figures/use-case.png — Use case diagram: actors, permissions, and dashboard workflows]

*Actors, permissions, and dashboard workflows: authentication, triage, deep analysis, label override, and administration.*

---

## Slide 33 — Dashboard Architecture — Class Diagram

**Dashboard Architecture — Class Diagram**

[IMAGE: /figures/class-diagram.png — Class diagram: users, labeled alerts, LLM analysis records]

*Core data model connecting users, labeled alerts, and LLM analysis records in the dashboard backend.*

---

## Slide 34 — Comparison with Related Work

**Comparison with Related Work**

| System | FP Reduction | Explainability | Deep Reasoning | MITRE Mapping | IR Actions | Live Dashboard |
|--------|:---:|:---:|:---:|:---:|:---:|:---:|
| Classical ML / DL systems | YES | NO | NO | NO | NO | NO |
| Wazuh LLM Classifier | YES | NO | NO | NO | NO | NO |
| SERC / RAG LLM copilots | NO | YES | YES | YES | YES | NO |
| Autonomous IR / SEvenLLM | NO | YES | YES | YES | YES | NO |
| **Our System** | **YES** | **YES** | **YES** | **YES** | **YES** | **YES** |

*Our contribution combines the missing pieces: false-positive filtering, structured LLM reasoning, MITRE mapping, IR action generation, and an operational dashboard in one local pipeline.*

---

## Slide 35 — Section Divider

**5 — Conclusion**

---

## Slide 36 — Conclusion & Future Outlook

**Conclusion & Future Outlook**

### Key Contributions
- **Validated 2-Stage Architecture:** First system to combine dedicated TP/FP filtering with deep structured threat reasoning.
- **Fine-tuned Wazuh Classifier:** LLaMA 3.1-8B model achieving 99.39% accuracy, optimized for local SOC inference.
- **Hybrid Escalation Policy:** Deterministic mechanism reducing analyst ticket volume by 52.7% while ensuring safety.

### Future Perspectives
- **Continuous Learning Loop:** Periodic retraining using analyst feedback to adapt to environment-specific patterns.
- **SOAR Integration:** Automated execution of containment actions via platforms like Shuffle or TheHive.
- **Autonomous SOC Tier:** Fully autonomous Tier-1 layer for low-risk, high-confidence threat categories.

> *"The answer to alert fatigue is a system that reads every alert with the same attention a senior analyst would."*

---

## Slide 37 — Demonstration

**DEMONSTRATION**

*Live pipeline walkthrough*

---

## Slide 38 — Thank You

**THANK YOU**

*Questions?*

---

# Appendix A — Image inventory (all assets referenced in deck)

| Bracket reference | File path |
|-------------------|-----------|
| [IMAGE: /pipeline.png] | `public/pipeline.png` |
| [IMAGE: /03_dirb_benign_dominance_donut.png] | `public/03_dirb_benign_dominance_donut.png` |
| [IMAGE: /04_binary_true_positive_composition.png] | `public/04_binary_true_positive_composition.png` |
| [IMAGE: /figures/ft_headline.png] | `public/figures/ft_headline.png` |
| [IMAGE: /figures/ft_perclass.png] | `public/figures/ft_perclass.png` |
| [IMAGE: /figures/ft_confusion.png] | `public/figures/ft_confusion.png` |
| [IMAGE: /figures/ft_baseline.png] | `public/figures/ft_baseline.png` |
| [IMAGE: /figures/use-case.png] | `public/figures/use-case.png` |
| [IMAGE: /figures/class-diagram.png] | `public/figures/class-diagram.png` |

---

# Appendix B — Slides currently disabled in the live deck (optional content)

These slides exist in source code but are commented out. Include them if you want a longer deck.

## B1 — Definitions: SIEM & MITRE ATT&CK

### SIEM (Security Information & Event Management)
A centralized system that aggregates, correlates, and analyzes security data from across an entire IT infrastructure to detect threats.

- **Log Aggregation:** Gathers security event logs from endpoints, networks, databases, and servers.
- **Correlation Engine:** Links disparate events to detect complex multi-stage attack patterns in real-time.
- **Retention & Compliance:** Maintains long-term historical log storage to satisfy legal and security audit frameworks.

### MITRE ATT&CK Framework
A structured, globally accessible knowledge base of adversary tactics and techniques based on real-world observations.

- **Tactics (The Why):** 14 categories representing the adversary's immediate technical goals (e.g., Persistence, Exfiltration).
- **Techniques (The How):** Specific methods and commands used by attackers to achieve their tactical goals.
- **Defense Alignment:** Enables defenders to map alert detections directly to specific threat actor behaviors.

---

## B2 — SOC Dashboard — Overview

**Stack:** FastAPI (Python 3.12) · PostgreSQL (wazuhdb) · Vanilla HTML5 / JS / CSS3

**Panel 1 — Overview — KPIs & Attack Distribution**
- Total alerts, TP/FP counts + percentages
- Analyses run + avg LLM latency
- Attack distribution breakdown
- Recent analyses with MITRE tactic badges

[IMAGE: /figures/dashboard_overview.png]

---

## B3 — SOC Dashboard — Labeled Alerts

**Panel 2 — Labeled Alerts — Triage List**
- Paginated table of all triaged alerts
- Color-coded TP / FP badges
- View raw JSON and trigger Stage 2
- Toggle label override, delete, bulk FP purge

[IMAGE: /figures/dashboard_labeled_alerts.png]

---

## B4 — SOC Dashboard — LLM Analysis

**Panel 3 — LLM Analysis — Threat Reports**
- Attack type + MITRE tactic badge per alert
- IR command in console-styled green block
- 50-word threat description on View
- Copy IR command for fast containment

[IMAGE: /figures/dashboard_llm_analysis.png]

---

## B5 — SOC Dashboard — User Management

**Panel 4 — User Management — Access Control**
- Admin-only panel with RBAC enforcement
- View all accounts, roles, active status
- Create / delete analyst accounts
- pbkdf2_sha256 hashed passwords

[IMAGE: /figures/dashboard_user_management.png]

---

# Appendix C — Removed slides (not in current deck)

The following were removed from the live presentation but may be useful context:

- **Comparative Analysis — The Gap We Fill** (soa-gap table comparing ML/DL, Wazuh LLM Classifier, SERC, Autonomous IR, Our System)
- **Key Results & Performance** (standalone results slide: 99.39% accuracy, 0.9919 TP recall, 1.65s latency, 96% MITRE mapping, 52.7% ticket reduction)

---

*End of presentation export — 38 active slides + optional appendix content.*
