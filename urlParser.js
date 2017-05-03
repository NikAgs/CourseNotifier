//import * as parse5 from 'parse5';
var request = require("request");
var parse5 = require("parse5");

function urlParser(url) {

    var j = request.jar();
    var cookie = request.cookie('JSESSIONID=+sGH38bCwz2zS0c+zy6h22EX; optimizelyEndUserId=oeu1409256829364r0.6471595226321369; is_returning=1; __unam=68ab37d-157b0cf82cb-713611d9-2; AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg=793872103%7CMCIDTS%7C17112%7CMCMID%7C75598208036089634291625597382885653491%7CMCAAMLH-1479066034%7C7%7CMCAAMB-1479066034%7CNRX38WO0n5BH8Th-nqAG_A%7CMCAID%7CNONE; s_pers=%20v8%3D1478461235051%7C1573069235051%3B%20v8_s%3DFirst%2520Visit%7C1478463035051%3B%20c19%3Dsd%253Aproduct%253Ajournal%253Aarticle%7C1478463035060%3B%20v68%3D1478461233608%7C1478463035065%3B; wt3_eid=%3B935649882378213%7C2147846244900537165%232147846244900695380; AMCV_774C31DD5342CAF40A490D44%40AdobeOrg=793872103%7CMCIDTS%7C17112%7CMCMID%7C24407214696017900431177526894600904390%7CMCAAMLH-1479067469%7C7%7CMCAAMB-1479067469%7CNRX38WO0n5BH8Th-nqAG_A%7CMCAID%7CNONE; _vwo_uuid_v2=62B46CA9C32752270D3A4225F6C1DED0|ed8b4b7d712e7d9f5d38ce278c14bbae; s_fid=610A5B84F5D58D18-0617F27F99B1E9F4; optimizelySegments=%7B%22204658328%22%3A%22false%22%2C%22204728159%22%3A%22none%22%2C%22204736122%22%3A%22referral%22%2C%22204775011%22%3A%22gc%22%2C%221383931086%22%3A%22gc%22%2C%221395171933%22%3A%22referral%22%2C%221398641027%22%3A%22false%22%7D; optimizelyBuckets=%7B%7D; _ceg.s=op8o18; _ceg.u=op8o18; _ga=GA1.2.218802879.1409249603; _gid=GA1.2.2008134057.1493784402; __utmt=1; csjdk6=R2633226633; __utma=262286286.218802879.1409249603.1493703347.1493784513.19; __utmb=262286286.60.10.1493784513; __utmc=262286286; __utmz=262286286.1488178950.14.5.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)');
    j.setCookie(cookie, url);

    request({url: url, jar: j}, function (error, response, body) {
        var Document = parse5.parse(body);
        for (var node of Document.childNodes) {
            if (node.nodeName === 'html') {
                for (var bodyNode of node.childNodes) {
                    if (bodyNode.nodeName == 'body') {
                        for (var div of bodyNode.childNodes) {
                            if (div.nodeName == 'div') {
                                for (var div2 of div.childNodes) {
                                    if (div2.nodeName == 'div') {
                                        for (var table of div2.childNodes) {
                                            if (table.nodeName == 'table') {
                                                for (var tbody of table.childNodes) {
                                                    if (tbody.nodeName == 'tbody') {
                                                        for (var tr of tbody.childNodes) {
                                                            if (tr.nodeName == 'tr') {
                                                                for (var td of tr.childNodes) {
                                                                    if (td.nodeName == 'td') {
                                                                        var strong = td.childNodes[0];
                                                                        if (strong.nodeName == 'strong') {
                                                                            return strong.childNodes[0].value;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}

var output = urlParser('https://courses.students.ubc.ca/cs/main?pname=subjarea&tname=subjareas&req=5&dept=MATH&course=317&section=951');
console.log(output);

