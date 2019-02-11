exports.seed = function(knex, Promise) {
  return knex("verbs")
    .del()
    .then(function() {
      return knex("conjugations").del();
    })
    .then(function() {
      return knex("verbs").insert([
        {
          id: 1,
          infinitive: "ir",
          translation: "to go",
          present_participle: "yendo",
          past_participle: "ido"
        },
        {
          id: 2,
          infinitive: "ser",
          translation: "to be",
          present_participle: "siendo",
          past_participle: "sido"
        },
        {
          id: 3,
          infinitive: "ver",
          translation: "to see, to watch",
          present_participle: "viendo",
          past_participle: "visto"
        },
        {
          id: 4,
          infinitive: "estar",
          translation: "to be",
          present_participle: "estando",
          past_participle: "estado"
        },
        {
          id: 5,
          infinitive: "tener",
          translation: "to have, to be",
          present_participle: "teniendo",
          past_participle: "tenido"
        },
        {
          id: 6,
          infinitive: "haber",
          translation: "to have",
          present_participle: "habiendo",
          past_participle: "habido"
        },
        {
          id: 7,
          infinitive: "hacer",
          translation: "to do, to make",
          present_participle: "haciendo",
          past_participle: "hecho"
        },
        {
          id: 8,
          infinitive: "venir",
          translation: "to come",
          present_participle: "viniendo",
          past_participle: "venido"
        },
        {
          id: 9,
          infinitive: "decir",
          translation: "to say, to tell",
          present_participle: "diciendo",
          past_participle: "dicho"
        },
        {
          id: 10,
          infinitive: "poder",
          translation: "to be able to, power",
          present_participle: "pudiendo",
          past_participle: "podido"
        },
        {
          id: 11,
          infinitive: "dar",
          translation: "to give",
          present_participle: "dando",
          past_participle: "dado"
        },
        {
          id: 12,
          infinitive: "saber",
          translation: "to know, to taste",
          present_participle: "sabiendo",
          past_participle: "sabido"
        },
        {
          id: 13,
          infinitive: "querer",
          translation: "to want, to love",
          present_participle: "queriendo",
          past_participle: "querido"
        },
        {
          id: 14,
          infinitive: "llegar",
          translation: "to arrive, to come",
          present_participle: "llegando",
          past_participle: "llegado"
        },
        {
          id: 15,
          infinitive: "pasar",
          translation: "to pass, to happen",
          present_participle: "pasando",
          past_participle: "pasado"
        },
        {
          id: 16,
          infinitive: "deber",
          translation: "to owe, must",
          present_participle: "debiendo",
          past_participle: "debido"
        },
        {
          id: 17,
          infinitive: "poner",
          translation: "to put",
          present_participle: "poniendo",
          past_participle: "puesto"
        },
        {
          id: 18,
          infinitive: "parecer",
          translation: "to seem",
          present_participle: "pareciendo",
          past_participle: "parecido"
        },
        {
          id: 19,
          infinitive: "hablar",
          translation: "to speak",
          present_participle: "hablando",
          past_participle: "hablado"
        },
        {
          id: 20,
          infinitive: "comer",
          translation: "to eat",
          present_participle: "comiendo",
          past_participle: "comido"
        },
        {
          id: 21,
          infinitive: "beber",
          translation: "to drink",
          present_participle: "bebiendo",
          past_participle: "bebido"
        },
        {
          id: 22,
          infinitive: "tomar",
          translation: "to take, to drink",
          present_participle: "tomando",
          past_participle: "tomado"
        },
        {
          id: 23,
          infinitive: "vivir",
          translation: "to live",
          present_participle: "viviendo",
          past_participle: "vivido"
        },
        {
          id: 24,
          infinitive: "dejar",
          translation: "to leave, to allow",
          present_participle: "dejando",
          past_participle: "dejado"
        },
        {
          id: 25,
          infinitive: "pensar",
          translation: "to think",
          present_participle: "pensando",
          past_participle: "pensado"
        }
      ]);
    })
    .then(function() {
      return knex("conjugations").insert([
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "voy",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second",
          conjugation: "vas",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third",
          conjugation: "va",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first_plural",
          conjugation: "vamos",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second_plural",
          conjugation: "vais",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third_plural",
          conjugation: "van",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "first",
          conjugation: "iba",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "second",
          conjugation: "ibas",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "third",
          conjugation: "iba",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "first_plural",
          conjugation: "íbamos",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "second_plural",
          conjugation: "ibais",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "third_plural",
          conjugation: "iban",
          verb_id: 1
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "fui",
          verb_id: 1
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "fuiste",
          verb_id: 1
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "fue",
          verb_id: 1
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "fuimos",
          verb_id: 1
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "fuisteis",
          verb_id: 1
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "fueron",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "vaya",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "vayas",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "vaya",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "vayamos",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "vayáis",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "vayan",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "fuera",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "fueras",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "fuera",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "fuéramos",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "fuerais",
          verb_id: 1
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "fueran",
          verb_id: 1
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "first",
          conjugation: "fuese",
          verb_id: 1
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "second",
          conjugation: "fueses",
          verb_id: 1
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "third",
          conjugation: "fuese",
          verb_id: 1
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "fuésemos",
          verb_id: 1
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "fueseis",
          verb_id: 1
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "fuesen",
          verb_id: 1
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "ve",
          verb_id: 1
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "vaya",
          verb_id: 1
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "vamos; vayamos",
          verb_id: 1
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "vayan",
          verb_id: 1
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no vayas",
          verb_id: 1
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no vaya",
          verb_id: 1
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no vayamos",
          verb_id: 1
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no vayáis",
          verb_id: 1
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no vayan",
          verb_id: 1
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "soy",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second",
          conjugation: "eres",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third",
          conjugation: "es",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first_plural",
          conjugation: "somos",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second_plural",
          conjugation: "sois",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third_plural",
          conjugation: "son",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "first",
          conjugation: "era",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "second",
          conjugation: "eras",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "third",
          conjugation: "era",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "first_plural",
          conjugation: "éramos",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "second_plural",
          conjugation: "erais",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "indicative",
          person: "third_plural",
          conjugation: "eran",
          verb_id: 2
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "fui",
          verb_id: 2
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "fuiste",
          verb_id: 2
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "fue",
          verb_id: 2
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "fuimos",
          verb_id: 2
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "fuisteis",
          verb_id: 2
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "fueron",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "sea",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "seas",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "sea",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "seamos",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "seáis",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "sean",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "fuera",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "fueras",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "fuera",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "fuéramos",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "fuerais",
          verb_id: 2
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "fueran",
          verb_id: 2
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "first",
          conjugation: "fuese",
          verb_id: 2
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "second",
          conjugation: "fueses",
          verb_id: 2
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "third",
          conjugation: "fuese",
          verb_id: 2
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "fuésemos",
          verb_id: 2
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "fueseis",
          verb_id: 2
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "fuesen",
          verb_id: 2
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "sé",
          verb_id: 2
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "sea",
          verb_id: 2
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "seamos",
          verb_id: 2
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "sean",
          verb_id: 2
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no seas",
          verb_id: 2
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no sea",
          verb_id: 2
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no seamos",
          verb_id: 2
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no seáis",
          verb_id: 2
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no sean",
          verb_id: 2
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "veo",
          verb_id: 3
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second_plural",
          conjugation: "veis",
          verb_id: 3
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "vi",
          verb_id: 3
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "vio",
          verb_id: 3
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "vea",
          verb_id: 3
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "veas",
          verb_id: 3
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "vea",
          verb_id: 3
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "veamos",
          verb_id: 3
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "veáis",
          verb_id: 3
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "vean",
          verb_id: 3
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "vea",
          verb_id: 3
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "veamos",
          verb_id: 3
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "vean",
          verb_id: 3
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no veas",
          verb_id: 3
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no vea",
          verb_id: 3
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no veamos",
          verb_id: 3
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no veáis",
          verb_id: 3
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no vean",
          verb_id: 3
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "estoy",
          verb_id: 4
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second",
          conjugation: "estás",
          verb_id: 4
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third",
          conjugation: "está",
          verb_id: 4
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third_plural",
          conjugation: "están",
          verb_id: 4
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "estuve",
          verb_id: 4
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "estuviste",
          verb_id: 4
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "estuvo",
          verb_id: 4
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "estuvimos",
          verb_id: 4
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "estuvisteis",
          verb_id: 4
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "estuvieron",
          verb_id: 4
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "esté",
          verb_id: 4
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "estés",
          verb_id: 4
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "esté",
          verb_id: 4
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "estén",
          verb_id: 4
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "estuviera",
          verb_id: 4
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "estuvieras",
          verb_id: 4
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "estuviera",
          verb_id: 4
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "estuviéramos",
          verb_id: 4
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "estuvierais",
          verb_id: 4
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "estuvieran",
          verb_id: 4
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "first",
          conjugation: "estuviese",
          verb_id: 4
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "second",
          conjugation: "estuvieses",
          verb_id: 4
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "third",
          conjugation: "estuviese",
          verb_id: 4
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "estuviésemos",
          verb_id: 4
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "estuvieseis",
          verb_id: 4
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "estuviesen",
          verb_id: 4
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "está",
          verb_id: 4
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "esté",
          verb_id: 4
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "estén",
          verb_id: 4
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no estés",
          verb_id: 4
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no esté",
          verb_id: 4
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no estén",
          verb_id: 4
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "tengo",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second",
          conjugation: "tienes",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third",
          conjugation: "tiene",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third_plural",
          conjugation: "tienen",
          verb_id: 5
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "tuve",
          verb_id: 5
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "tuviste",
          verb_id: 5
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "tuvo",
          verb_id: 5
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "tuvimos",
          verb_id: 5
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "tuvisteis",
          verb_id: 5
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "tuvieron",
          verb_id: 5
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first",
          conjugation: "tendré",
          verb_id: 5
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second",
          conjugation: "tendrás",
          verb_id: 5
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third",
          conjugation: "tendrá",
          verb_id: 5
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first_plural",
          conjugation: "tendremos",
          verb_id: 5
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second_plural",
          conjugation: "tendréis",
          verb_id: 5
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third_plural",
          conjugation: "tendrán",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "tenga",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "tengas",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "tenga",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "tengamos",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "tengáis",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "tengan",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "tuviera",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "tuvieras",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "tuviera",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "tuviéramos",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "tuvierais",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "tuvieran",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first",
          conjugation: "tuviese",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second",
          conjugation: "tuvieses",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third",
          conjugation: "tuviese",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first_plural",
          conjugation: "tuviésemos",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second_plural",
          conjugation: "tuvieseis",
          verb_id: 5
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third_plural",
          conjugation: "tuviesen",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first",
          conjugation: "tendría",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second",
          conjugation: "tendrías",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third",
          conjugation: "tendría",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first_plural",
          conjugation: "tendríamos",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second_plural",
          conjugation: "tendríais",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third_plural",
          conjugation: "tendrían",
          verb_id: 5
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "ten",
          verb_id: 5
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "tenga",
          verb_id: 5
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "tengamos",
          verb_id: 5
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "tengan",
          verb_id: 5
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no tengas",
          verb_id: 5
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no tenga",
          verb_id: 5
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no tengamos",
          verb_id: 5
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no tengáis",
          verb_id: 5
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no tengan",
          verb_id: 5
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "he",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second",
          conjugation: "has",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third",
          conjugation: "ha; hay",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first_plural",
          conjugation: "hemos",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third_plural",
          conjugation: "han",
          verb_id: 6
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "hube",
          verb_id: 6
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "hubiste",
          verb_id: 6
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "hubo",
          verb_id: 6
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "hubimos",
          verb_id: 6
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "hubisteis",
          verb_id: 6
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "hubieron",
          verb_id: 6
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first",
          conjugation: "habré",
          verb_id: 6
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second",
          conjugation: "habrás",
          verb_id: 6
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third",
          conjugation: "habrá",
          verb_id: 6
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first_plural",
          conjugation: "habremos",
          verb_id: 6
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second_plural",
          conjugation: "habréis",
          verb_id: 6
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third_plural",
          conjugation: "habrán",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "haya",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "hayas",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "haya",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "hayamos",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "hayáis",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "hayan",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "hubiera",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "hubieras",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "hubiera",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "hubiéramos",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "hubierais",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "hubieran",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first",
          conjugation: "hubiese",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second",
          conjugation: "hubieses",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third",
          conjugation: "hubiese",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first_plural",
          conjugation: "hubiésemos",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second_plural",
          conjugation: "hubieseis",
          verb_id: 6
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third_plural",
          conjugation: "hubiesen",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first",
          conjugation: "habría",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second",
          conjugation: "habrías",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third",
          conjugation: "habría",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first_plural",
          conjugation: "habríamos",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second_plural",
          conjugation: "habríais",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third_plural",
          conjugation: "habrían",
          verb_id: 6
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "he; hé",
          verb_id: 6
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "haya",
          verb_id: 6
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "hayamos",
          verb_id: 6
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "hayan",
          verb_id: 6
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no hayas",
          verb_id: 6
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no haya",
          verb_id: 6
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no hayamos",
          verb_id: 6
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no hayáis",
          verb_id: 6
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no hayan",
          verb_id: 6
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "hago",
          verb_id: 7
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "hice",
          verb_id: 7
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "hiciste",
          verb_id: 7
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "hizo",
          verb_id: 7
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "hicimos",
          verb_id: 7
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "hicisteis",
          verb_id: 7
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "hicieron",
          verb_id: 7
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first",
          conjugation: "haré",
          verb_id: 7
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second",
          conjugation: "harás",
          verb_id: 7
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third",
          conjugation: "hará",
          verb_id: 7
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first_plural",
          conjugation: "haremos",
          verb_id: 7
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second_plural",
          conjugation: "haréis",
          verb_id: 7
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third_plural",
          conjugation: "harán",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "haga",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "hagas",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "haga",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "hagamos",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "hagáis",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "hagan",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "hiciera",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "hicieras",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "hiciera",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "hiciéramos",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "hicierais",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "hicieran",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first",
          conjugation: "hiciese",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second",
          conjugation: "hicieses",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third",
          conjugation: "hiciese",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first_plural",
          conjugation: "hiciésemos",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second_plural",
          conjugation: "hicieseis",
          verb_id: 7
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third_plural",
          conjugation: "hiciesen",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first",
          conjugation: "haría",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second",
          conjugation: "harías",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third",
          conjugation: "haría",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first_plural",
          conjugation: "haríamos",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second_plural",
          conjugation: "haríais",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third_plural",
          conjugation: "harían",
          verb_id: 7
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "haz",
          verb_id: 7
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "haga",
          verb_id: 7
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "hagamos",
          verb_id: 7
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "hagan",
          verb_id: 7
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no hagas",
          verb_id: 7
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no haga",
          verb_id: 7
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no hagamos",
          verb_id: 7
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no hagáis",
          verb_id: 7
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no hagan",
          verb_id: 7
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "vengo",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second",
          conjugation: "vienes",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third",
          conjugation: "viene",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third_plural",
          conjugation: "vienen",
          verb_id: 8
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "vine",
          verb_id: 8
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "viniste",
          verb_id: 8
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "vino",
          verb_id: 8
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "vinimos",
          verb_id: 8
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "vinisteis",
          verb_id: 8
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "vinieron",
          verb_id: 8
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first",
          conjugation: "vendré",
          verb_id: 8
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second",
          conjugation: "vendrás",
          verb_id: 8
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third",
          conjugation: "vendrá",
          verb_id: 8
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first_plural",
          conjugation: "vendremos",
          verb_id: 8
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second_plural",
          conjugation: "vendréis",
          verb_id: 8
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third_plural",
          conjugation: "vendrán",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "venga",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "vengas",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "venga",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "vengamos",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "vengáis",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "vengan",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "viniera",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "vinieras",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "viniera",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "viniéramos",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "vinierais",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "vinieran",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first",
          conjugation: "viniese",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second",
          conjugation: "vinieses",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third",
          conjugation: "viniese",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first_plural",
          conjugation: "viniésemos",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second_plural",
          conjugation: "vinieseis",
          verb_id: 8
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third_plural",
          conjugation: "viniesen",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first",
          conjugation: "vendría",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second",
          conjugation: "vendrías",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third",
          conjugation: "vendría",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first_plural",
          conjugation: "vendríamos",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second_plural",
          conjugation: "vendríais",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third_plural",
          conjugation: "vendrían",
          verb_id: 8
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "ven",
          verb_id: 8
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "venga",
          verb_id: 8
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "vengamos",
          verb_id: 8
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "vengan",
          verb_id: 8
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no vengas",
          verb_id: 8
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no venga",
          verb_id: 8
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no vengamos",
          verb_id: 8
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no vengáis",
          verb_id: 8
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no vengan",
          verb_id: 8
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "digo",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second",
          conjugation: "dices",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third",
          conjugation: "dice",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third_plural",
          conjugation: "dicen",
          verb_id: 9
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "dije",
          verb_id: 9
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "dijiste",
          verb_id: 9
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "dijo",
          verb_id: 9
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "dijimos",
          verb_id: 9
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "dijisteis",
          verb_id: 9
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "dijeron",
          verb_id: 9
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first",
          conjugation: "diré",
          verb_id: 9
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second",
          conjugation: "dirás",
          verb_id: 9
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third",
          conjugation: "dirá",
          verb_id: 9
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first_plural",
          conjugation: "diremos",
          verb_id: 9
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second_plural",
          conjugation: "diréis",
          verb_id: 9
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third_plural",
          conjugation: "dirán",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "diga",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "digas",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "diga",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "digamos",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "digáis",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "digan",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "dijera",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "dijeras",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "dijera",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "dijéramos",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "dijerais",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "dijeran",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first",
          conjugation: "dijese",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second",
          conjugation: "dijeses",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third",
          conjugation: "dijese",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first_plural",
          conjugation: "dijésemos",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second_plural",
          conjugation: "dijeseis",
          verb_id: 9
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third_plural",
          conjugation: "dijesen",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first",
          conjugation: "diría",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second",
          conjugation: "dirías",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third",
          conjugation: "diría",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first_plural",
          conjugation: "diríamos",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second_plural",
          conjugation: "diríais",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third_plural",
          conjugation: "dirían",
          verb_id: 9
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "di; dice",
          verb_id: 9
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "diga",
          verb_id: 9
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "digamos",
          verb_id: 9
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "digan",
          verb_id: 9
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no digas",
          verb_id: 9
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no diga",
          verb_id: 9
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no digamos",
          verb_id: 9
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no digáis",
          verb_id: 9
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no digan",
          verb_id: 9
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "puedo",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second",
          conjugation: "puedes",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third",
          conjugation: "puede",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third_plural",
          conjugation: "pueden",
          verb_id: 10
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "pude",
          verb_id: 10
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "pudiste",
          verb_id: 10
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "pudo",
          verb_id: 10
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "pudimos",
          verb_id: 10
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "pudisteis",
          verb_id: 10
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "pudieron",
          verb_id: 10
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first",
          conjugation: "podré",
          verb_id: 10
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second",
          conjugation: "podrás",
          verb_id: 10
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third",
          conjugation: "podrá",
          verb_id: 10
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first_plural",
          conjugation: "podremos",
          verb_id: 10
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second_plural",
          conjugation: "podréis",
          verb_id: 10
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third_plural",
          conjugation: "podrán",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "pueda",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "puedas",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "pueda",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "puedan",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "pudiera",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "pudieras",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "pudiera",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "pudiéramos",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "pudierais",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "pudieran",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first",
          conjugation: "pudiese",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second",
          conjugation: "pudieses",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third",
          conjugation: "pudiese",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first_plural",
          conjugation: "pudiésemos",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second_plural",
          conjugation: "pudieseis",
          verb_id: 10
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third_plural",
          conjugation: "pudiesen",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first",
          conjugation: "podría",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second",
          conjugation: "podrías",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third",
          conjugation: "podría",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first_plural",
          conjugation: "podríamos",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second_plural",
          conjugation: "podríais",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third_plural",
          conjugation: "podrían",
          verb_id: 10
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "puede",
          verb_id: 10
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "pueda",
          verb_id: 10
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "puedan",
          verb_id: 10
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no puedas",
          verb_id: 10
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no pueda",
          verb_id: 10
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no puedan",
          verb_id: 10
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "doy",
          verb_id: 11
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second_plural",
          conjugation: "dais",
          verb_id: 11
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "di",
          verb_id: 11
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "diste",
          verb_id: 11
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "dio",
          verb_id: 11
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "dimos",
          verb_id: 11
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "disteis",
          verb_id: 11
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "dieron",
          verb_id: 11
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "dé",
          verb_id: 11
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "dé",
          verb_id: 11
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "deis",
          verb_id: 11
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "diera",
          verb_id: 11
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "dieras",
          verb_id: 11
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "diera",
          verb_id: 11
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "diéramos",
          verb_id: 11
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "dierais",
          verb_id: 11
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "dieran",
          verb_id: 11
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "first",
          conjugation: "diese",
          verb_id: 11
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "second",
          conjugation: "dieses",
          verb_id: 11
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "third",
          conjugation: "diese",
          verb_id: 11
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "diésemos",
          verb_id: 11
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "dieseis",
          verb_id: 11
        },
        {
          tense: "imperfect_2",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "diesen",
          verb_id: 11
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "dé",
          verb_id: 11
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no dé",
          verb_id: 11
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no deis",
          verb_id: 11
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "sé",
          verb_id: 12
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "supe",
          verb_id: 12
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "supiste",
          verb_id: 12
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "supo",
          verb_id: 12
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "supimos",
          verb_id: 12
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "supisteis",
          verb_id: 12
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "supieron",
          verb_id: 12
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first",
          conjugation: "sabré",
          verb_id: 12
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second",
          conjugation: "sabrás",
          verb_id: 12
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third",
          conjugation: "sabrá",
          verb_id: 12
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first_plural",
          conjugation: "sabremos",
          verb_id: 12
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second_plural",
          conjugation: "sabréis",
          verb_id: 12
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third_plural",
          conjugation: "sabrán",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "sepa",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "sepas",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "sepa",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "sepamos",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "sepáis",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "sepan",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "supiera",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "supieras",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "supiera",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "supiéramos",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "supierais",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "supieran",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first",
          conjugation: "supiese",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second",
          conjugation: "supieses",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third",
          conjugation: "supiese",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first_plural",
          conjugation: "supiésemos",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second_plural",
          conjugation: "supieseis",
          verb_id: 12
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third_plural",
          conjugation: "supiesen",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first",
          conjugation: "sabría",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second",
          conjugation: "sabrías",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third",
          conjugation: "sabría",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first_plural",
          conjugation: "sabríamos",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second_plural",
          conjugation: "sabríais",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third_plural",
          conjugation: "sabrían",
          verb_id: 12
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "sepa",
          verb_id: 12
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "sepamos",
          verb_id: 12
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "sepan",
          verb_id: 12
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no sepas",
          verb_id: 12
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no sepa",
          verb_id: 12
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no sepamos",
          verb_id: 12
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no sepáis",
          verb_id: 12
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no sepan",
          verb_id: 12
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "quiero",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second",
          conjugation: "quieres",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third",
          conjugation: "quiere",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third_plural",
          conjugation: "quieren",
          verb_id: 13
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "quise",
          verb_id: 13
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "quisiste",
          verb_id: 13
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "quiso",
          verb_id: 13
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "quisimos",
          verb_id: 13
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "quisisteis",
          verb_id: 13
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "quisieron",
          verb_id: 13
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first",
          conjugation: "querré",
          verb_id: 13
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second",
          conjugation: "querrás",
          verb_id: 13
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third",
          conjugation: "querrá",
          verb_id: 13
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first_plural",
          conjugation: "querremos",
          verb_id: 13
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second_plural",
          conjugation: "querréis",
          verb_id: 13
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third_plural",
          conjugation: "querrán",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "quiera",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "quieras",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "quiera",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "quieran",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "quisiera",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "quisieras",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "quisiera",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "quisiéramos",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "quisierais",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "quisieran",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first",
          conjugation: "quisiese",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second",
          conjugation: "quisieses",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third",
          conjugation: "quisiese",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first_plural",
          conjugation: "quisiésemos",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second_plural",
          conjugation: "quisieseis",
          verb_id: 13
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third_plural",
          conjugation: "quisiesen",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first",
          conjugation: "querría",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second",
          conjugation: "querrías",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third",
          conjugation: "querría",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first_plural",
          conjugation: "querríamos",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second_plural",
          conjugation: "querríais",
          verb_id: 13
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third_plural",
          conjugation: "querrían",
          verb_id: 13
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "quiere",
          verb_id: 13
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "quiera",
          verb_id: 13
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "quieran",
          verb_id: 13
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no quieras",
          verb_id: 13
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no quiera",
          verb_id: 13
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no quieran",
          verb_id: 13
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "llegué",
          verb_id: 14
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "llegue",
          verb_id: 14
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "llegues",
          verb_id: 14
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "llegue",
          verb_id: 14
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "lleguemos",
          verb_id: 14
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "lleguéis",
          verb_id: 14
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "lleguen",
          verb_id: 14
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "llegue",
          verb_id: 14
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "lleguemos",
          verb_id: 14
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "lleguen",
          verb_id: 14
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no llegues",
          verb_id: 14
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no llegue",
          verb_id: 14
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no lleguemos",
          verb_id: 14
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no lleguéis",
          verb_id: 14
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no lleguen",
          verb_id: 14
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "pongo",
          verb_id: 17
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first",
          conjugation: "puse",
          verb_id: 17
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second",
          conjugation: "pusiste",
          verb_id: 17
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third",
          conjugation: "puso",
          verb_id: 17
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "first_plural",
          conjugation: "pusimos",
          verb_id: 17
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "second_plural",
          conjugation: "pusisteis",
          verb_id: 17
        },
        {
          tense: "preterite",
          mood: "indicative",
          person: "third_plural",
          conjugation: "pusieron",
          verb_id: 17
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first",
          conjugation: "pondré",
          verb_id: 17
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second",
          conjugation: "pondrás",
          verb_id: 17
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third",
          conjugation: "pondrá",
          verb_id: 17
        },
        {
          tense: "future",
          mood: "indicative",
          person: "first_plural",
          conjugation: "pondremos",
          verb_id: 17
        },
        {
          tense: "future",
          mood: "indicative",
          person: "second_plural",
          conjugation: "pondréis",
          verb_id: 17
        },
        {
          tense: "future",
          mood: "indicative",
          person: "third_plural",
          conjugation: "pondrán",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "ponga",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "pongas",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "ponga",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "pongamos",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "pongáis",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "pongan",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first",
          conjugation: "pusiera",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second",
          conjugation: "pusieras",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third",
          conjugation: "pusiera",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "pusiéramos",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "pusierais",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "pusieran",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first",
          conjugation: "pusiese",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second",
          conjugation: "pusieses",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third",
          conjugation: "pusiese",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "first_plural",
          conjugation: "pusiésemos",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "second_plural",
          conjugation: "pusieseis",
          verb_id: 17
        },
        {
          tense: "imperfect",
          mood: "subjunctive_2",
          person: "third_plural",
          conjugation: "pusiesen",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first",
          conjugation: "pondría",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second",
          conjugation: "pondrías",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third",
          conjugation: "pondría",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "conditional",
          person: "first_plural",
          conjugation: "pondríamos",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "conditional",
          person: "second_plural",
          conjugation: "pondríais",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "conditional",
          person: "third_plural",
          conjugation: "pondrían",
          verb_id: 17
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "pon",
          verb_id: 17
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "ponga",
          verb_id: 17
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "pongamos",
          verb_id: 17
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "pongan",
          verb_id: 17
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no pongas",
          verb_id: 17
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no ponga",
          verb_id: 17
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no pongamos",
          verb_id: 17
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no pongáis",
          verb_id: 17
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no pongan",
          verb_id: 17
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "parezco",
          verb_id: 18
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "parezca",
          verb_id: 18
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "parezcas",
          verb_id: 18
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "parezca",
          verb_id: 18
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first_plural",
          conjugation: "parezcamos",
          verb_id: 18
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second_plural",
          conjugation: "parezcáis",
          verb_id: 18
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "parezcan",
          verb_id: 18
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "parezca",
          verb_id: 18
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "parezcamos",
          verb_id: 18
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "parezcan",
          verb_id: 18
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no parezcas",
          verb_id: 18
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no parezca",
          verb_id: 18
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "first_plural",
          conjugation: "no parezcamos",
          verb_id: 18
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second_plural",
          conjugation: "no parezcáis",
          verb_id: 18
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no parezcan",
          verb_id: 18
        },
        {
          tense: "present",
          mood: "indicative",
          person: "first",
          conjugation: "pienso",
          verb_id: 25
        },
        {
          tense: "present",
          mood: "indicative",
          person: "second",
          conjugation: "piensas",
          verb_id: 25
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third",
          conjugation: "piensa",
          verb_id: 25
        },
        {
          tense: "present",
          mood: "indicative",
          person: "third_plural",
          conjugation: "piensan",
          verb_id: 25
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "first",
          conjugation: "piense",
          verb_id: 25
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "second",
          conjugation: "pienses",
          verb_id: 25
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third",
          conjugation: "piense",
          verb_id: 25
        },
        {
          tense: "present",
          mood: "subjunctive",
          person: "third_plural",
          conjugation: "piensen",
          verb_id: 25
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "second",
          conjugation: "piensa",
          verb_id: 25
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third",
          conjugation: "piense",
          verb_id: 25
        },
        {
          tense: "affirmative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "piensen",
          verb_id: 25
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "second",
          conjugation: "no pienses",
          verb_id: 25
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third",
          conjugation: "no piense",
          verb_id: 25
        },
        {
          tense: "negative",
          mood: "imperative",
          person: "third_plural",
          conjugation: "no piensen",
          verb_id: 25
        }
      ]);
    });
};
