# Fragen zu MobiComp2
Die folgenden Fragen stellen die minimale Abgangskompetenz der Studierenden in Bezug auf konkrete Themen in diesem Fach dar.
Steuern und Regeln

Was ist eine Regelung?
Was ist eine Steuerung?

Was ist ein Blockschaltbild?
Zeichnen und benennen eines generischen Blockschaltbildes

Was ist eine Messstrecke?
Was ist eine Regelstrecke?
Was ist eine Störgrösse?
Was ist der Unterschied zwischen Regelgrösse und Messgrösse?*

Was ist ein BangBang?
Was bedeutet BangBang?
Wie ist die mathematische Beschreibung von BangBang?
Wie sieht das Blockschaltbild eines BangBang aus?
BangBang als Pseudocode?
Wie verhält sich ein BangBang?
Was ist ein Overshoot?
Beispiel für BangBang?
BangBang in der Praxis, was sind die limitierenden Faktoren?

Was ist ein PID?
Was bedeutet PID?
Wie ist die mathematische Beschreibung von PID?
Kontinuierlich
Diskret
Wie sieht das Blockschaltbild eines PIDs aus?
PID als Pseudocode?
Wie verhält sich ein PID?
Was ist Integral Wind-Up?
Was ist ein Overshoot?
Beispiel für PID?
PID in der Praxis, was sind die limitierenden Faktoren?

## Sensors / Actors

Was ist das Noumenon?
Was ist ein Phänomen(on)?
Was ist ein Sensor?
Wie misst ein Sensor?
Was misst ein Sensor?
Welche Dimensionen (Phänomene) deckt ein Sensor immer ab?

Was ist Data?
Was ist ein Signal?
Welche Dimensionen hat ein Signal mindestens?
Was ist ein Sample?
Welche Attribute hat ein Sample mindestens?
Was ist Information?

Wie wird aus Data ein Signal?
Wie wird aus einem Signal ein Sample?
Wie wird aus einem Sample Information?*

Was ist die Sampling-Frequenz?
Was ist das Shannon-Nyquist Theorem?
Was ist die Nyquist-Frequenz?
Was ist Aliasing?
Was bleibt beim Sampling erhalten, was geht verloren?

Was ist die Zeitdomäne?
Was ist die Frequenzdomäne?
Was ist ein Domänen-Switch?
Wie kann die Domäne gewechselt werden?


## Awareness
Was macht Mobile-Computing im IoT-Bereich so speziell?
Was ist Awareness?
Location
Activity
Context
Situation
Wie kann Awareness erreicht werden?
Was kann mit einem Sensor und verfügbaren Daten erreicht werden? (PinMe)?
Was kann mit Situation Awareness erreicht werden?
Was ist Respectful Design in diesem Umfeld?

Security
Welche Aspekte deckt ‘Security’ ab?

Was bedeutet authentisch?
Wann bedeutet privat?
Was bedeutet anonym?
Was bedeutet Integrität?
Was bedeutet autorisiert?
Was bedeutet privat?
Was bedeutet ‘available’?

Was ist Kryptographie?
Wird durch Kryptographie Sicherheit erbracht?

Was ist der Unterschied zwischen klassischer und Public-Key Kryptographie?
Was ist das Schlüsselaustausch-Problem?
Ist das Problem gelöst?

Was ist ein ephemeraler Schlüssel?
Was ist Zufall?
Welche Art Zufall wird in der Kryptographie benötigt?

Was ist ein Session-Key?
Was ist ein Diffie-Hellman Key establishment?

Was ist hybride Verschlüsselung?

Was ist die semantik einer Signatur?
Was ist die semantik einer Verschlüsselung?

Was ist ein Zero Knowledge Proof?

Wie sieht ein Protokoll-Ablauf aus?
Session-Schlüssel erzeugung
Zero Knowledge Proof
Encryption
Signature

Mathematisches Beispiel
Session-Schlüssel erzeugung
Encryption
Zero Knowledge Proof
Signature
Meldungs-Protokolle
Was unterscheidet die folgenden Protokolle: MQTT / HTTP / CoAP
In ihrer Ideologie?
Auf Netzwerkebene?
In der Anwendung?

Und was ist OPC-UA?
Im Vergleich zu MQTT?

MQTT 5
Auf welchen Network-layer baut MQTT auf? 
Wie sieht das MQTT-State-Management aus (Diagram)?
Was sind ‘Shared-Topics’?
Was sind Wildcard Subscriptions?
Was ist eine Retained Message?
Wie verhält sich diese, während die Session aktiv ist?
Wie verhält sich diese, wenn die Session geschlossen ist?

Was sagt das Flag cleanStart aus?
Was bedeuten die qos 0,1,2?
Für die Applikation?
Für das Netzwerk?

Wie ist die Ordnung der Meldungen organisiert?
	Auf gleichem Topic?
	Auf verschiedenen Topics?

Was ist die maximum Packet Size?
Wann wird diese gesetzt?
Wo befindet sie sich?
Was bewirkt sie?
Was bewirkt sie bei Shared Tipics… Ist dieses Verhalten gut?

Welche interessanten Infos kann der Publish-Reason code beinhalten?
Was ist ein Topic Alias?
Was ist der mqtt lastWill?
Wann wird dieser gesetzt?
Wo befindet er sich?
Wann wird er als Testament eröffnet?

Was ist das Message expiry Intervall?
Wann wird diese gesetzt?
Wo befindet er sich?
Was bewirkt sie?

Welche Art der Security beinhaltet MQTT?
Availability?
Integrity?
Authenticity?
Confidentiality/Privacy?
Authority?


Wie ist MQTT standardisiert?

