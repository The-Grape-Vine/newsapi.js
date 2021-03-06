export type SourceEntity = {
    status: string,
    sources: InternalSourceEntity[];
}

type InternalSourceEntity = {
    id: string,
    name: string,
    description: string,
    url: string,
    category: Category,
    language: Language,
    country: Country;
}

type Category = "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";

type Language = "ar" | "de" | "en" | "es" | "fr" | "he" | "it" | "nl" | "no" | "pt" | "ru" | "se" | "ud" | "zh";

type Country = "ae" | "ar" | "at" | "au" | "be" | "bg" | "br" | "ca" | "ch" | "cn" | "co" | "cu" | "cz" | "de" |
"eg" | "fr" | "gb" | "gr" | "hk" | "hu" | "id" | "ie" | "il" | "in" | "it" | "jp" | "kr" | "lt" | "lv" |
"ma" | "mx" | "my" | "ng" | "nl" | "no" | "nz" | "ph" | "pl" | "pt" | "ro" | "rs" | "ru" | "sa" | "se" | "sg" | "si" | "sk" | "th" |
"tr" | "tw" | "ua" | "us" | "ve" | "za";