/*******************************************************************************
*
* E M B E D D E D   W I Z A R D   P R O J E C T
*
*                                                Copyright (c) TARA Systems GmbH
*                                    written by Paul Banach and Manfred Schweyer
*
********************************************************************************
*
* This file was generated automatically by Embedded Wizard Studio.
*
* Please do not make any modifications of this file! The modifications are lost
* when the file is generated again by Embedded Wizard Studio!
*
* The template of this heading text can be found in the file 'head.ewt' in the
* directory 'Platforms' of your Embedded Wizard installation directory. If you
* wish to adapt this text, please copy the template file 'head.ewt' into your
* project directory and edit the copy only. Please avoid any modifications of
* the original template file!
*
* Version  : 12.05
* Profile  : SimulationProfile
* Platform : Windows.Software.RGBA8888
*
*******************************************************************************/

/* Font resource : 'Application::TimeFont' */
EW_DEFINE_FONT_RES( ApplicationTimeFont, 18, 4, 1, 16, 0x00C0, 0x00C0 )
  EW_GLYPH( 0x0000, 1, -14, 7, 14, 9, 0x00000000 ),
  EW_GLYPH( 0x0020, 0, 0, 0, 0, 3, 0x000000A6 ),                /* ' ' */
  EW_GLYPH( 0x0021, 1, -13, 1, 13, 3, 0x000000A6 ),             /* '!' */
  EW_GLYPH( 0x0022, 2, -13, 3, 4, 5, 0x000000C8 ),              /* '"' */
  EW_GLYPH( 0x0023, 0, -13, 9, 13, 9, 0x000000F2 ),             /* '#' */
  EW_GLYPH( 0x0024, 0, -14, 5, 15, 7, 0x0000028F ),             /* '$' */
  EW_GLYPH( 0x0025, 0, -13, 10, 13, 11, 0x00000372 ),           /* '%' */
  EW_GLYPH( 0x0026, 0, -13, 6, 13, 7, 0x00000519 ),             /* '&' */
  EW_GLYPH( 0x0027, 1, -13, 1, 4, 3, 0x000005F8 ),              /* ''' */
  EW_GLYPH( 0x0028, 1, -13, 3, 15, 4, 0x0000060B ),             /* '(' */
  EW_GLYPH( 0x0029, 0, -13, 3, 15, 4, 0x000006B3 ),             /* ')' */
  EW_GLYPH( 0x002A, 1, -13, 5, 6, 7, 0x0000075B ),              /* '*' */
  EW_GLYPH( 0x002B, 1, -8, 5, 5, 7, 0x000007D3 ),               /* '+' */
  EW_GLYPH( 0x002C, 0, -1, 2, 2, 3, 0x00000810 ),               /* ',' */
  EW_GLYPH( 0x002D, 1, -5, 3, 1, 5, 0x00000824 ),               /* '-' */
  EW_GLYPH( 0x002E, 1, -1, 1, 1, 3, 0x00000833 ),               /* '.' */
  EW_GLYPH( 0x002F, 0, -13, 7, 13, 7, 0x00000838 ),             /* '/' */
  EW_GLYPH( 0x0030, 0, -13, 5, 13, 6, 0x0000091C ),             /* '0' */
  EW_GLYPH( 0x0031, 0, -13, 2, 13, 3, 0x000009B1 ),             /* '1' */
  EW_GLYPH( 0x0032, 0, -13, 5, 13, 6, 0x000009E4 ),             /* '2' */
  EW_GLYPH( 0x0033, 0, -13, 5, 13, 6, 0x00000AB8 ),             /* '3' */
  EW_GLYPH( 0x0034, 0, -13, 6, 13, 7, 0x00000B92 ),             /* '4' */
  EW_GLYPH( 0x0035, 0, -13, 5, 13, 6, 0x00000C57 ),             /* '5' */
  EW_GLYPH( 0x0036, 0, -13, 5, 13, 6, 0x00000D0E ),             /* '6' */
  EW_GLYPH( 0x0037, 0, -13, 5, 13, 6, 0x00000DCE ),             /* '7' */
  EW_GLYPH( 0x0038, 0, -13, 5, 13, 6, 0x00000E8A ),             /* '8' */
  EW_GLYPH( 0x0039, 0, -13, 5, 13, 6, 0x00000F87 ),             /* '9' */
  EW_GLYPH( 0x003A, 1, -7, 1, 7, 3, 0x00001046 ),               /* ':' */
  EW_GLYPH( 0x003B, 0, -7, 2, 8, 3, 0x00001059 ),               /* ';' */
  EW_GLYPH( 0x003C, 1, -9, 4, 7, 6, 0x00001081 ),               /* '<' */
  EW_GLYPH( 0x003D, 1, -7, 6, 4, 8, 0x000010F8 ),               /* '=' */
  EW_GLYPH( 0x003E, 1, -9, 4, 7, 6, 0x00001158 ),               /* '>' */
  EW_GLYPH( 0x003F, 0, -13, 5, 13, 6, 0x000011CF ),             /* '?' */
  EW_GLYPH( 0x0040, 1, -13, 7, 13, 9, 0x00001282 ),             /* '@' */
  EW_GLYPH( 0x0041, 0, -13, 7, 13, 8, 0x00001385 ),             /* 'A' */
  EW_GLYPH( 0x0042, 0, -13, 5, 13, 6, 0x000014A6 ),             /* 'B' */
  EW_GLYPH( 0x0043, 0, -13, 5, 13, 6, 0x00001562 ),             /* 'C' */
  EW_GLYPH( 0x0044, 0, -13, 5, 13, 6, 0x000015FD ),             /* 'D' */
  EW_GLYPH( 0x0045, 0, -13, 4, 13, 5, 0x00001684 ),             /* 'E' */
  EW_GLYPH( 0x0046, 0, -13, 4, 13, 4, 0x000016F8 ),             /* 'F' */
  EW_GLYPH( 0x0047, 0, -13, 5, 13, 6, 0x00001760 ),             /* 'G' */
  EW_GLYPH( 0x0048, 0, -13, 5, 13, 6, 0x00001803 ),             /* 'H' */
  EW_GLYPH( 0x0049, 0, -13, 1, 13, 2, 0x00001864 ),             /* 'I' */
  EW_GLYPH( 0x004A, 0, -13, 5, 13, 6, 0x00001875 ),             /* 'J' */
  EW_GLYPH( 0x004B, 0, -13, 5, 13, 6, 0x000018DC ),             /* 'K' */
  EW_GLYPH( 0x004C, 0, -13, 4, 13, 4, 0x00001999 ),             /* 'L' */
  EW_GLYPH( 0x004D, 0, -13, 7, 13, 8, 0x000019DD ),             /* 'M' */
  EW_GLYPH( 0x004E, 0, -13, 5, 13, 6, 0x00001AE1 ),             /* 'N' */
  EW_GLYPH( 0x004F, 0, -13, 5, 13, 6, 0x00001B7B ),             /* 'O' */
  EW_GLYPH( 0x0050, 0, -13, 5, 13, 6, 0x00001C0E ),             /* 'P' */
  EW_GLYPH( 0x0051, 0, -13, 6, 13, 6, 0x00001C9F ),             /* 'Q' */
  EW_GLYPH( 0x0052, 0, -13, 5, 13, 6, 0x00001D4E ),             /* 'R' */
  EW_GLYPH( 0x0053, 0, -13, 5, 13, 6, 0x00001E04 ),             /* 'S' */
  EW_GLYPH( 0x0054, 0, -13, 5, 13, 6, 0x00001ED6 ),             /* 'T' */
  EW_GLYPH( 0x0055, 0, -13, 5, 13, 6, 0x00001F3B ),             /* 'U' */
  EW_GLYPH( 0x0056, 0, -13, 5, 13, 6, 0x00001FA2 ),             /* 'V' */
  EW_GLYPH( 0x0057, 0, -13, 9, 13, 10, 0x00002085 ),            /* 'W' */
  EW_GLYPH( 0x0058, 0, -13, 5, 13, 6, 0x0000222F ),             /* 'X' */
  EW_GLYPH( 0x0059, 0, -13, 7, 13, 8, 0x00002329 ),             /* 'Y' */
  EW_GLYPH( 0x005A, 0, -13, 5, 13, 6, 0x00002410 ),             /* 'Z' */
  EW_GLYPH( 0x005B, 1, -13, 3, 15, 5, 0x000024E9 ),             /* '[' */
  EW_GLYPH( 0x005C, 0, -13, 7, 13, 7, 0x0000253A ),             /* '\' */
  EW_GLYPH( 0x005D, 1, -13, 3, 15, 5, 0x00002618 ),             /* ']' */
  EW_GLYPH( 0x005E, 1, -13, 5, 5, 7, 0x00002669 ),              /* '^' */
  EW_GLYPH( 0x005F, 0, 2, 6, 1, 6, 0x000026D3 ),                /* '_' */
  EW_GLYPH( 0x0060, 2, -11, 2, 2, 7, 0x000026F1 ),              /* '`' */
  EW_GLYPH( 0x0061, 0, -8, 5, 8, 6, 0x0000270A ),               /* 'a' */
  EW_GLYPH( 0x0062, 0, -13, 5, 13, 6, 0x000027A7 ),             /* 'b' */
  EW_GLYPH( 0x0063, 0, -8, 5, 8, 6, 0x00002830 ),               /* 'c' */
  EW_GLYPH( 0x0064, 0, -13, 5, 13, 6, 0x000028AF ),             /* 'd' */
  EW_GLYPH( 0x0065, 0, -8, 5, 8, 6, 0x00002931 ),               /* 'e' */
  EW_GLYPH( 0x0066, -1, -13, 3, 13, 2, 0x000029D5 ),            /* 'f' */
  EW_GLYPH( 0x0067, 0, -8, 5, 12, 6, 0x00002A20 ),              /* 'g' */
  EW_GLYPH( 0x0068, 0, -13, 5, 13, 6, 0x00002AD1 ),             /* 'h' */
  EW_GLYPH( 0x0069, 0, -12, 1, 12, 2, 0x00002B49 ),             /* 'i' */
  EW_GLYPH( 0x006A, -1, -12, 2, 16, 2, 0x00002B61 ),            /* 'j' */
  EW_GLYPH( 0x006B, 0, -13, 4, 13, 5, 0x00002B9C ),             /* 'k' */
  EW_GLYPH( 0x006C, 0, -13, 1, 13, 2, 0x00002C1C ),             /* 'l' */
  EW_GLYPH( 0x006D, 0, -8, 9, 8, 10, 0x00002C2D ),              /* 'm' */
  EW_GLYPH( 0x006E, 0, -8, 5, 8, 6, 0x00002CE5 ),               /* 'n' */
  EW_GLYPH( 0x006F, 0, -8, 5, 8, 6, 0x00002D41 ),               /* 'o' */
  EW_GLYPH( 0x0070, 0, -8, 5, 12, 6, 0x00002DC1 ),              /* 'p' */
  EW_GLYPH( 0x0071, 0, -8, 5, 12, 6, 0x00002E57 ),              /* 'q' */
  EW_GLYPH( 0x0072, 0, -8, 5, 8, 6, 0x00002EE9 ),               /* 'r' */
  EW_GLYPH( 0x0073, 0, -8, 5, 8, 6, 0x00002F4F ),               /* 's' */
  EW_GLYPH( 0x0074, -1, -11, 3, 11, 3, 0x00002FFE ),            /* 't' */
  EW_GLYPH( 0x0075, 0, -8, 5, 8, 6, 0x00003041 ),               /* 'u' */
  EW_GLYPH( 0x0076, 0, -8, 5, 8, 6, 0x0000308B ),               /* 'v' */
  EW_GLYPH( 0x0077, 0, -8, 9, 8, 10, 0x0000311E ),              /* 'w' */
  EW_GLYPH( 0x0078, 0, -8, 5, 8, 6, 0x0000320A ),               /* 'x' */
  EW_GLYPH( 0x0079, 0, -8, 5, 12, 6, 0x0000329A ),              /* 'y' */
  EW_GLYPH( 0x007A, 0, -8, 4, 8, 5, 0x0000335C ),               /* 'z' */
  EW_GLYPH( 0x007B, 1, -13, 4, 15, 6, 0x000033E2 ),             /* '{' */
  EW_GLYPH( 0x007C, 1, -13, 1, 16, 3, 0x00003470 ),             /* '|' */
  EW_GLYPH( 0x007D, 1, -13, 4, 15, 6, 0x00003484 ),             /* '}' */
  EW_GLYPH( 0x007E, 1, -6, 6, 2, 9, 0x00003514 ),               /* '~' */
  EW_GLYPH( 0x00A0, 0, 0, 0, 0, 2, 0x00003551 ),
  EW_GLYPH( 0x00A1, 1, -13, 1, 13, 3, 0x00003551 ),
  EW_GLYPH( 0x00A2, 1, -13, 5, 13, 6, 0x00003573 ),
  EW_GLYPH( 0x00A3, 0, -13, 6, 13, 7, 0x0000361C ),
  EW_GLYPH( 0x00A4, 2, -11, 6, 9, 9, 0x000036D8 ),
  EW_GLYPH( 0x00A5, 0, -13, 7, 13, 6, 0x00003788 ),
  EW_GLYPH( 0x00A6, 2, -13, 1, 17, 3, 0x000038A2 ),
  EW_GLYPH( 0x00A7, 0, -13, 6, 13, 7, 0x000038BF ),
  EW_GLYPH( 0x00A8, 2, -10, 3, 1, 7, 0x00003A23 ),
  EW_GLYPH( 0x00A9, 0, -13, 8, 13, 9, 0x00003A2E ),
  EW_GLYPH( 0x00AA, 0, -13, 4, 9, 5, 0x00003B5C ),
  EW_GLYPH( 0x00AB, 1, -8, 6, 7, 8, 0x00003BFE ),
  EW_GLYPH( 0x00AC, 1, -6, 6, 3, 8, 0x00003CA6 ),
  EW_GLYPH( 0x00AD, 1, -7, 6, 1, 8, 0x00003CE4 ),
  EW_GLYPH( 0x00AE, 0, -13, 8, 13, 9, 0x00003D02 ),
  EW_GLYPH( 0x00AF, 2, -10, 4, 1, 7, 0x00003E2F ),
  EW_GLYPH( 0x00B0, 1, -13, 4, 7, 6, 0x00003E43 ),
  EW_GLYPH( 0x00B1, 1, -9, 5, 7, 7, 0x00003E97 ),
  EW_GLYPH( 0x00B2, 0, -13, 4, 7, 5, 0x00003EF6 ),
  EW_GLYPH( 0x00B3, 0, -13, 4, 7, 5, 0x00003F5D ),
  EW_GLYPH( 0x00B4, 3, -11, 2, 2, 7, 0x00003FCA ),
  EW_GLYPH( 0x00B5, 1, -8, 5, 11, 7, 0x00003FE3 ),
  EW_GLYPH( 0x00B6, 1, -13, 6, 13, 8, 0x00004044 ),
  EW_GLYPH( 0x00B7, 1, -5, 1, 1, 3, 0x000040EC ),
  EW_GLYPH( 0x00B8, 2, 0, 3, 3, 7, 0x000040F1 ),
  EW_GLYPH( 0x00B9, 0, -13, 2, 7, 3, 0x0000411D ),
  EW_GLYPH( 0x00BA, 0, -13, 4, 8, 5, 0x00004143 ),
  EW_GLYPH( 0x00BB, 1, -8, 6, 7, 8, 0x000041BB ),
  EW_GLYPH( 0x00BC, 0, -13, 9, 13, 9, 0x00004261 ),
  EW_GLYPH( 0x00BD, 0, -13, 8, 13, 9, 0x0000439F ),
  EW_GLYPH( 0x00BE, 0, -13, 11, 13, 11, 0x000044E0 ),
  EW_GLYPH( 0x00BF, 0, -13, 5, 13, 6, 0x00004696 ),
  EW_GLYPH( 0x00C0, 0, -16, 7, 16, 8, 0x0000472E ),
  EW_GLYPH( 0x00C1, 0, -16, 7, 16, 8, 0x00004880 ),
  EW_GLYPH( 0x00C2, 0, -16, 7, 16, 8, 0x000049D2 ),
  EW_GLYPH( 0x00C3, 0, -16, 7, 16, 8, 0x00004B30 ),
  EW_GLYPH( 0x00C4, 0, -15, 7, 15, 8, 0x00004C94 ),
  EW_GLYPH( 0x00C5, 0, -17, 7, 17, 8, 0x00004DD3 ),
  EW_GLYPH( 0x00C6, 0, -13, 8, 13, 9, 0x00004F33 ),
  EW_GLYPH( 0x00C7, 0, -13, 5, 16, 6, 0x0000504B ),
  EW_GLYPH( 0x00C8, 0, -16, 4, 16, 5, 0x00005121 ),
  EW_GLYPH( 0x00C9, 0, -16, 4, 16, 5, 0x000051BD ),
  EW_GLYPH( 0x00CA, 0, -16, 4, 16, 5, 0x00005259 ),
  EW_GLYPH( 0x00CB, 0, -15, 4, 15, 5, 0x00005301 ),
  EW_GLYPH( 0x00CC, 0, -16, 2, 16, 2, 0x0000538D ),
  EW_GLYPH( 0x00CD, 0, -16, 3, 16, 2, 0x000053CD ),
  EW_GLYPH( 0x00CE, -1, -16, 3, 16, 2, 0x0000541D ),
  EW_GLYPH( 0x00CF, -1, -15, 3, 15, 2, 0x00005479 ),
  EW_GLYPH( 0x00D0, 0, -13, 5, 13, 6, 0x000054BA ),
  EW_GLYPH( 0x00D1, 0, -16, 5, 16, 6, 0x00005559 ),
  EW_GLYPH( 0x00D2, 0, -16, 5, 16, 6, 0x00005630 ),
  EW_GLYPH( 0x00D3, 0, -16, 5, 16, 6, 0x000056EE ),
  EW_GLYPH( 0x00D4, 0, -16, 5, 16, 6, 0x000057AC ),
  EW_GLYPH( 0x00D5, 0, -16, 5, 16, 6, 0x00005876 ),
  EW_GLYPH( 0x00D6, 0, -15, 5, 15, 6, 0x00005946 ),
  EW_GLYPH( 0x00D7, 1, -8, 5, 5, 8, 0x000059F3 ),
  EW_GLYPH( 0x00D8, 0, -13, 8, 13, 6, 0x00005A6B ),
  EW_GLYPH( 0x00D9, 0, -16, 5, 16, 6, 0x00005B72 ),
  EW_GLYPH( 0x00DA, 0, -16, 5, 16, 6, 0x00005C04 ),
  EW_GLYPH( 0x00DB, 0, -16, 5, 16, 6, 0x00005C96 ),
  EW_GLYPH( 0x00DC, 0, -15, 5, 15, 6, 0x00005D34 ),
  EW_GLYPH( 0x00DD, 0, -16, 7, 16, 8, 0x00005DB5 ),
  EW_GLYPH( 0x00DE, 0, -13, 6, 13, 7, 0x00005ECD ),
  EW_GLYPH( 0x00DF, 1, -13, 5, 13, 7, 0x00005F7B ),
  EW_GLYPH( 0x00E0, 0, -11, 5, 11, 6, 0x00006022 ),
  EW_GLYPH( 0x00E1, 0, -11, 5, 11, 6, 0x000060EA ),
  EW_GLYPH( 0x00E2, 0, -11, 5, 11, 6, 0x000061B2 ),
  EW_GLYPH( 0x00E3, 0, -11, 5, 11, 6, 0x00006286 ),
  EW_GLYPH( 0x00E4, 0, -10, 5, 10, 6, 0x00006360 ),
  EW_GLYPH( 0x00E5, 0, -13, 5, 13, 6, 0x00006417 ),
  EW_GLYPH( 0x00E6, 0, -8, 7, 8, 8, 0x000064FD ),
  EW_GLYPH( 0x00E7, 0, -8, 5, 11, 6, 0x000065C3 ),
  EW_GLYPH( 0x00E8, 0, -11, 5, 11, 6, 0x0000667E ),
  EW_GLYPH( 0x00E9, 0, -11, 5, 11, 6, 0x0000674D ),
  EW_GLYPH( 0x00EA, 0, -11, 5, 11, 6, 0x0000681C ),
  EW_GLYPH( 0x00EB, 0, -10, 5, 10, 6, 0x000068F7 ),
  EW_GLYPH( 0x00EC, -1, -11, 2, 11, 2, 0x000069B5 ),
  EW_GLYPH( 0x00ED, 0, -11, 3, 11, 2, 0x000069EB ),
  EW_GLYPH( 0x00EE, -1, -11, 3, 11, 2, 0x00006A2C ),
  EW_GLYPH( 0x00EF, -1, -10, 3, 10, 2, 0x00006A79 ),
  EW_GLYPH( 0x00F0, 0, -13, 6, 13, 6, 0x00006AAB ),
  EW_GLYPH( 0x00F1, 0, -11, 5, 11, 6, 0x00006B7F ),
  EW_GLYPH( 0x00F2, 0, -11, 5, 11, 6, 0x00006C18 ),
  EW_GLYPH( 0x00F3, 0, -11, 5, 11, 6, 0x00006CC3 ),
  EW_GLYPH( 0x00F4, 0, -11, 5, 11, 6, 0x00006D6E ),
  EW_GLYPH( 0x00F5, 0, -11, 5, 11, 6, 0x00006E25 ),
  EW_GLYPH( 0x00F6, 0, -10, 5, 10, 6, 0x00006EE2 ),
  EW_GLYPH( 0x00F7, 1, -9, 6, 7, 7, 0x00006F7C ),
  EW_GLYPH( 0x00F8, 0, -8, 7, 8, 6, 0x00006FEE ),
  EW_GLYPH( 0x00F9, 0, -11, 5, 11, 6, 0x000070AD ),
  EW_GLYPH( 0x00FA, 0, -11, 5, 11, 6, 0x00007122 ),
  EW_GLYPH( 0x00FB, 0, -11, 5, 11, 6, 0x00007197 ),
  EW_GLYPH( 0x00FC, 0, -10, 5, 10, 6, 0x00007218 ),
  EW_GLYPH( 0x00FD, 0, -11, 5, 15, 6, 0x0000727C ),
  EW_GLYPH( 0x00FE, 0, -13, 4, 17, 5, 0x00007369 ),
  EW_GLYPH( 0x00FF, 0, -10, 5, 14, 6, 0x000073F3 ),

  EW_FONT_PIXEL( ApplicationTimeFont, 0x000074CF )              /* ratio 70.06 % */
    0xEF7BDEF7, 0x17BDEF75, 0x00000000, 0x00000000, 0xBDEF7000, 0xF04E45D7, 0xC61DD7BB,
    0xFE2042B2, 0xF2CF0FE2, 0xE37F182C, 0x1FF2FF0F, 0xFBECFBAC, 0x75DAC2FC, 0xDA8375FF,
    0xB1FB0D9E, 0xBFF5B88B, 0x3DF897B5, 0x31773F77, 0xFF0FEAFE, 0x3D603FE1, 0xCF2E03D6,
    0xF38FAA71, 0x73641226, 0x2BF8C4CF, 0xDFD0AF86, 0x18180665, 0xC77FEFF7, 0xFF8C7FDF,
    0xCE7E30BF, 0xB6E2FFFF, 0x00E67924, 0x4F980DBC, 0xE35FA492, 0xF5DFFFFD, 0xF55FFFE5,
    0x3ADF3FFF, 0xFE8BFFFF, 0x267C9249, 0x98C05FA0, 0x8BEA490F, 0xC77FFFF7, 0xF387FEFF,
    0x44BFFFBF, 0x72370004, 0xBDEF7DC1, 0x6EBDF777, 0x0480004C, 0x772F7FE7, 0xF73F50AC,
    0xE7E7AAE6, 0x8647CC3F, 0x1F30C820, 0xC9F9E1FF, 0x95FDEE55, 0xBF4AD57B, 0xA67BF8C7,
    0xE9108248, 0xEFDFC699, 0xE2F795A9, 0x78E63BCF, 0x81FD9EBF, 0xEF7F67AF, 0x02E5E398,
    0xBDEF75EE, 0xD7E305EE, 0xA0BDEF7D, 0x8C2FB836, 0x83FBC0F9, 0x17BF09AC, 0x2B984D62,
    0xACC1FDE0, 0xCF0BDF84, 0x305EF01C, 0xCE3FF7FE, 0x224FFEFF, 0x00000001, 0xFE791200,
    0xCCE27FF7, 0x0001FCF8, 0x3FF7FE30, 0x4FFEFFCE, 0x0725C122, 0xF1644D7E, 0xEF14625E,
    0xC5EB1645, 0xE3BDEFBB, 0xFCE3FF7F, 0x0626FFEF, 0xFF7208B8, 0x79C3EF38, 0x2EFF721F,
    0xFCF22402, 0x0FE0FFEF, 0xC3FDC14F, 0x72E53C2A, 0x4F0AB0FF, 0xFD43FDC1, 0xBDCF75EE,
    0x7B8005D7, 0xBDCEBDEF, 0xF7000817, 0xFBDEEBFE, 0x05C1217F, 0x7FF7C890, 0xDFF8EFFF,
    0xFBFF38FF, 0x0B84893F, 0xF72FFBDC, 0x00485FFE, 0xFFCF2240, 0xF7BDCFFE, 0x819EF75E,
    0x8FE7979C, 0x73131893, 0x4F0B9010, 0x078C1CE2, 0x3BBEE533, 0x0CFBBECF, 0xC8C3900C,
    0x9BF3A9DF, 0x5CE6B7EB, 0xD4FB35BF, 0x804618E9, 0xFDFF9E44, 0xFFBFF19F, 0x7FF7FE71,
    0x08000912, 0x3D7B9DF8, 0x42E05EE7, 0xFEFFCF22, 0x5D70BDCF, 0xBAFC6017, 0x1DDF8AF1,
    0x1EFF9EFF, 0x7F8C3DFE, 0xF7BBF14F, 0xBDEF7BDE, 0xDC0BDEF7, 0x2FBDEF7B, 0xFECC2FEE,
    0x46FFA30F, 0xC7FF67FF, 0xBFF185FD, 0xF7FE71FF, 0x0179127F, 0xFC4BE606, 0xF983DE1F,
    0xB85C0020, 0x3DEF73CC, 0xF7BDCFB3, 0xDCE08074, 0x2E037103, 0x0B882E70, 0x34EB8820,
    0x0333DEE7, 0xBDEF73E8, 0xA501B897, 0xA87F9FE0, 0x40E720AF, 0x94628C65, 0xEEFFB067,
    0x91EA59E6, 0x7B8ACA52, 0x7BEDD46F, 0xF07ADF6F, 0x5FF7BDD4, 0x90BFFDEE, 0xDEE59810,
    0xBFBDCFDF, 0x0003E61F, 0xF9EF7080, 0xE79EE73D, 0x05F9EE77, 0x0005C002, 0x1020B800,
    0xEFCF73BF, 0xBDD3BBDE, 0x00A78BEF, 0x00000000, 0xDFBDCB30, 0xEEBDEF7B, 0xEE0000BD,
    0x00BDEEBD, 0xF7BDEE00, 0x0BDEEBDE, 0xEEBDEE00, 0x000000BD, 0xF9E7B9CF, 0x817E7B9D,
    0xEE017000, 0x080005C5, 0xF3DCEFC4, 0x0000B8BB, 0xB97BDC00, 0x000002F7, 0x2E000170,
    0x00000000, 0x881005C0, 0x77E7B9DF, 0x977E1FC9, 0x390FA2CC, 0xF3C5FA1F, 0x8BF41EA0,
    0x8BF41EB1, 0x2F7D0AB1, 0x00000000, 0xF7BDC000, 0xF07AF226, 0x8545B1B0, 0x552A88A8,
    0x3F9C7FE1, 0x116789EB, 0xEC09EFCF, 0x81E3C367, 0x005E099C, 0xF059B8FE, 0xFC2A8287,
    0x3D416A0F, 0x84C62EF8, 0x7C8C1F82, 0xEFCF3DCE, 0x040BF3DC, 0x00000000, 0xE77E2040,
    0xF7BDDF9E, 0x3F3DEE3C, 0x84000008, 0xBDCFCF7B, 0x800001E7, 0xF8F3DCE7, 0x027E7B9D,
    0x00000001, 0x25C0B000, 0xDCEFCF68, 0xF7BDEF33, 0x3F3DEE3C, 0xFFC10008, 0x65EFD62E,
    0x2321546F, 0x51BD8550, 0x9E7B9CF5, 0x17E7B9DF, 0xDC9E8088, 0x4CEB1319, 0xFAF89EF4,
    0x7E204022, 0xBDDF9EE7, 0xDD7BDEF7, 0x0000000B, 0xB8000000, 0x000000B8, 0x04000000,
    0xF9EE77E2, 0x4CFF83FD, 0xF334E663, 0x9C79BCA6, 0x4E67299C, 0xB3064533, 0x7F93B926,
    0x493199FD, 0x86E21FE9, 0x5294CFF8, 0x1E3C7CCE, 0x38E3DE4F, 0xC461CDCE, 0xCF4E7230,
    0x63999E9C, 0xCA532FC4, 0x92788C5F, 0xDF9E3CF9, 0x23187324, 0x3F8E3BF9, 0x4931E3D3,
    0xF29DA529, 0x7E7A8F5F, 0x6637FFDB, 0x8BBD433E, 0x52659B5D, 0xB377EC51, 0xAA96A3D6,
    0x94FDEDBD, 0xF722767A, 0xD6FBE1F7, 0x2AC56783, 0xFE39C2B5, 0x85515A87, 0xA9E0FBEF,
    0x00025207, 0xDEF70000, 0xFFBDEE7B, 0x2BF073C2, 0x87DF83C6, 0xF7C28C1A, 0x1FA833C3,
    0xDFFA83CE, 0xE3BDF77B, 0x0000005E, 0xFEF71800, 0x6A0BDC0A, 0x60BDF00D, 0x07DF04AE,
    0x39880CE6, 0x5C81F7C1, 0x181FBC13, 0xF7BDC0AB, 0x00077BEE, 0xDC000000, 0xBE4DE43B,
    0x1FFCF1F1, 0xF9E789F3, 0xF7B9EF5E, 0xF7BF7BDE, 0xFDFFCCF7, 0xFFDFFCD7, 0x5EFB9107,
    0x4157BEEF, 0x7BEAF3C4, 0x00000BAE, 0x73FFE720, 0x32BD96E2, 0x74C80000, 0xDF633DEF,
    0xFEFB38FF, 0x02E1224F, 0xFF9FF890, 0x00B81FFD, 0x7BFF5000, 0x995EF7BD, 0xA2640000,
    0x7FEABDEF, 0xEFFEF5FF, 0x7BA44DFF, 0xFEF7BA6F, 0xFDE226E1, 0xD8CFFFDF, 0xD70036EE,
    0x00002EBD, 0xDBDEFFCF, 0x00995EF7, 0xBDE26400, 0xBDFFAAF7, 0xFF78C5C0, 0x002F7FF7,
    0xFFF30000, 0xEE53EFF9, 0x00024237, 0x02EBAE00, 0x005C5C5C, 0x77FFC400, 0x7D400001,
    0xC2FF4FF4, 0xBF43D45C, 0x7BDE2CE4, 0xFF9AE001, 0xBF3FFE65, 0xFFF6F9FF, 0xBC8DFE94,
    0x060611BF, 0x00000000, 0x7FFAC6E0, 0xDFE5BDF6, 0x00000019, 0xC7FEFFC6, 0x1DFFDFFD,
    0x81800018, 0x7FF7FF71, 0x67FFCC6F, 0x9DFE5B9F, 0x0E400001, 0xDEE39EF7, 0xE780009D,
    0xF7EDEF7F, 0x0000595E, 0xEE7BC0E4, 0x017BFF55, 0x9DF8EE00, 0x9FEFFDE9, 0x05C2666F,
    0xEFB18000, 0x7DDF671E, 0xF7DFF146, 0xBBDBF90B, 0x93FBF798, 0x8FBBECE3, 0x75EEB80B,
    0xFEF24001, 0x00002E2F, 0x3BE59480, 0xF887F8E7, 0x7FDAA957, 0x2AA55DFF, 0xAFD42322,
    0xCA5373D8, 0xF10DC43F, 0xD54A52AF, 0x7B6D76DE, 0x552EA957, 0x50861861, 0x5D8BAA5D,
    0x294DAEDB, 0xF186FCA5, 0xAD6FADBB, 0x0DBF4AB9, 0xD6B56EE8, 0xFEFADBAA, 0x54ABFC43,
    0xAEFFBFED, 0xC2221552, 0x6EFD8B33, 0x54190A2A, 0x71546F61, 0x7EF73DEF, 0x6633F793,
    0x87395F7A, 0xF77E65EF, 0xF77AE75A, 0x9E000915, 0x8FDE3FA4, 0x2440004A, 0x0017BEEF,
    0xEF72CF70, 0xA000044B, 0xFFE6BE1E, 0x44000A32, 0xFE75F7B8, 0xF63713EF, 0xFDEE3BDE,
    0x02E09981, 0x9C7FDFC6, 0x2449FFBF, 0x2417005C, 0xBFFBFDF2, 0xA02FF7F5, 0xDE5FF7FE,
    0x12BFFDFF, 0x5C0B8009, 0xBDD75EF7, 0xC0000017, 0x2FBDEF75, 0xCF3267BC, 0x677DEF7C,
    0x400057B8, 0xF7CC57B8, 0xC99E77DE, 0xBF893B3C, 0xF329E3EF, 0x8CAA6F61, 0xB1843BE2,
    0x718EEAAB, 0xA83BBFBB, 0xEFF718B1, 0xD7B8C77F, 0x000003BD, 0x8171705C, 0xAFFBDFFA,
    0xFFEF7FF7, 0x57E7C84D, 0x3FEFCFDC, 0xDEF7F3FD, 0x6F55BE7F, 0xC778E766, 0xB67D9CFF,
    0xBBFB7FB9, 0xC849EFD4, 0xFFEF7FF7, 0xBFF3EEBD, 0xF3FFDEF7, 0xEF7BDFFB, 0x704017FF,
    0xF7103DEE, 0x0002E006, 0xBDC42E00, 0x43DEE701, 0xDFFBF100, 0x37FFEF7B, 0x9CEB99CF,
    0x9F46E75E, 0xAC73DE0B, 0xFFFFEE73, 0xB7BDEFFF, 0x7E9FA9FA, 0x572ABBF5, 0x5F7AFBE5,
    0xAD7DEBEF, 0x5BA955CA, 0xDEF7BDF7, 0x17BDEF7B, 0xF7BDEF70, 0x7BDEE73E, 0xDEE7D3CF,
    0x90274F7B, 0xB80F7BDC, 0xFFC00037, 0xFEFDF826, 0xEE00DE60, 0x48FAAE0F, 0x7BDCFB20,
    0xEF7BE9EF, 0x3ECCE79D, 0x080083A7, 0x2E69CFA2, 0xDEF75EE0, 0xE5C05EEB, 0xEFEF7BDE,
    0x5BDD5FDE, 0xDED4F417, 0x77BAD6D6, 0x9CFB339E, 0xE6DE263E, 0x9F531DFD, 0xF3DFBEF3,
    0x0000B8BB, 0x738B0C00, 0x02EB3FF0, 0xEF7B9CF0, 0x57BDC5FD, 0x02000000, 0xEBDEE2FC,
    0x0005EE39, 0xC7637000, 0xD3FC7739, 0x07E3C9FF, 0x3ECCE798, 0x208083A7, 0xE79E9CFA,
    0xFDEF7BCC, 0x75BA57CA, 0xCB595ACB, 0xEF5F7AFB, 0x56B37DEB, 0xDBDB7AD6, 0x3DF8C1FC,
    0xF01F6E09, 0x6F03F1CC, 0xE049F303, 0x1F9AC0D7, 0xE834F8AE, 0x19F22E32, 0xF67DFA0D,
    0xDCF98D75, 0x017D5D7B, 0x27BF187F, 0x6781F6E1, 0x0DBC1F8E, 0xD7E093E6, 0x3FB9E560,
    0x16F73E37, 0xCF90BBFD, 0x697EA7A4, 0xD68F98EF, 0xBDD6B2FA, 0xE3099CF3, 0xB869CFA7,
    0xCCF098ED, 0x36F1B781, 0x93E63FBC, 0x46BF131C, 0x5F5AF39F, 0x54E798FE, 0xA06DEB7C,
    0x42E3197F, 0xE81BB33E, 0xCBAFB3D7, 0xAF7B8F98, 0x17005F4B, 0x30005C2E, 0xCF59B70A,
    0x00446DE0, 0xE77E206E, 0x0BDF1F9E, 0x0D880F7E, 0x829406E2, 0xBEA1FE7F, 0x95039C82,
    0x9E518A31, 0x9BBBFEC1, 0x4A47A967, 0xBDEE2B29, 0xBDEFB751, 0x53C1EB7D, 0xFCF03F78,
    0x1B880EC0, 0xF9FE0A50, 0x720AFA87, 0x28C6540E, 0xFB067946, 0xA59E6EEF, 0xACA5291E,
    0xDD46F7B8, 0xADF6F7BE, 0x27914F07, 0xF85EFDE1, 0x06E20FD5, 0xFE7F8294, 0x9C82BEA1,
    0x8A319503, 0xFEC19E51, 0xA9679BBB, 0x2B294A47, 0xB751BDEE, 0xEB7DBDEF, 0x2FEC53C1,
    0xC0F7462F, 0x6E236FCD, 0xE7F82940, 0xC82BEA1F, 0xA3195039, 0xEC19E518, 0x9679BBBF,
    0xB294A47A, 0x751BDEE2, 0xB7DBDEFB, 0x75C53C1E, 0x3710BAE1, 0xF3FC14A0, 0xE415F50F,
    0x518CA81C, 0xF60CF28C, 0x4B3CDDDF, 0x594A523D, 0xBA8DEF71, 0x5BEDEF7D, 0x9E629E0F,
    0x001A7D09, 0xB9586FFD, 0xF3FC14A0, 0xE415F50F, 0x518CA81C, 0xF60CF28C, 0x4B3CDDDF,
    0x594A523D, 0xBA8DEF71, 0x5BEDEF7D, 0xB9C29E0F, 0xBA465EF7, 0xB014F2F7, 0xC81540FF,
    0xBDC5500C, 0xEF73FED7, 0x9E640AB5, 0x85EEB50B, 0x70AA07FB, 0x3DCE7DEF, 0xF3DCEFCF,
    0x0B80040B, 0x41700000, 0x9EE77E20, 0x164E73DF, 0x3FC65CE7, 0x87BF2F7D, 0xD7BDEED8,
    0xC00017BD, 0x17BDD7BD, 0x97BDC000, 0xB1F9E3F7, 0xDD7BDEE3, 0xDC00017B, 0x017BDD7B,
    0xE57BDC00, 0xFAF7EF49, 0x7BDEEFD5, 0x00017BDD, 0x7BDD7BDC, 0x7BDC0001, 0xEF75D75D,
    0x17BDD7BD, 0xD7BDC000, 0xC00017BD, 0x7F7BF7BD, 0x000BEC4F, 0x79FBC000, 0x005C767E,
    0x20000000, 0xFBDFBE4F, 0x000B9FAB, 0xAE000000, 0x00175D7B, 0xDC000000, 0xF7BA777B,
    0x0014F17D, 0x7B97BDC0, 0x6600002F, 0xED7BF7B9, 0x3DD1AF2F, 0x1FF6FCDC, 0x50FE0B37,
    0x41FF8550, 0xDF07A82D, 0xF05098C5, 0x17BE9183, 0x79B107BF, 0xEFCF3DCE, 0x040BF3DC,
    0x00000000, 0xE77E2040, 0x0FDE1F9E, 0x9E3B0FCF, 0x3BF3CF73, 0x0102FCF7, 0x00000000,
    0xB9DF8810, 0xF24F27E7, 0xFABF2F7E, 0xCF3DCE79, 0x0BF3DCEF, 0x00000004, 0x7E204000,
    0xFD9F9EE7, 0x87BA35E5, 0xCE7EDF9B, 0xDCEFCF3D, 0x00040BF3, 0x40000000, 0x9EE77E20,
    0x5D72EB9F, 0xF9E7B9CF, 0x817E7B9D, 0x00000000, 0xEFC40800, 0x537BF3DC, 0x6F3BBF7E,
    0x997EF7E7, 0x77D97F5F, 0x3DCE7EDD, 0xF73BF50F, 0x102B3CFC, 0x17AC03FE, 0x0502C010,
    0x07EB03F8, 0x81778242, 0xDFE813F8, 0x5EF83F3D, 0xE6C41EFC, 0x000002E2, 0x10000000,
    0xE7B9DF88, 0xF3C3F787, 0x0B8B8EC3, 0x00000000, 0x7E204000, 0x3C9F9EE7, 0xFCBDFBC9,
    0x02E2E7EA, 0x00000000, 0xDF881000, 0xBAE7E7B9, 0x05C5D75C, 0x00000000, 0xBF102000,
    0xDE0FCF73, 0xB03F3C0F, 0xFEE44EC3, 0x7ADF7C3E, 0xA558ACF0, 0xFFC73856, 0xF0AA2B50,
    0xF53C1F7D, 0x00004A40, 0xC002E000, 0xEE3CF7BD, 0x0207E7BD, 0xEE100000, 0xDEE7E7BD,
    0xB8001E7B, 0xDEE99EF7, 0x0000C8DD, 0x7EAFC3EF, 0x958DBEFC, 0x4F704000, 0x1EFC5EFB,
    0xEFFE66C4, 0xFEFFE6BF, 0xF7DC883F, 0x0ABDF77A, 0xDF579E22, 0xF0FDE173, 0xFE63B0FC,
    0xFFE6BFEF, 0xDC883FFE, 0xBDF77AF7, 0x579E220A, 0x93C973DF, 0xAFCBDFBC, 0xFEFFE67E,
    0xFFEFFE6B, 0xAF7DC883, 0x20ABDF77, 0x3DF579E2, 0x35E5FD97, 0xDF9B87BA, 0xAFFBFF9E,
    0x0FFFBFF9, 0xDEBDF722, 0x8882AF7D, 0x5CF7D5E7, 0xCD75CBAE, 0xFCD7FDFF, 0x9107FFDF,
    0xBEEF5EFB, 0xF3C44157, 0xE62E7BEA, 0x4069F499, 0x9FF99BFF, 0x35FF7FF3, 0x41FFF7FF,
    0xBBD7BEE4, 0xF11055EF, 0x6B9EFABC, 0x99EF7B9E, 0xFA7BAE7D, 0xEBDDF880, 0xDD7BA8DE,
    0x201B807B, 0x9EF3FCFA, 0xC7FEFB1E, 0x127FF7D9, 0xC4801709, 0xFFEFFCFF, 0x70F63D8C,
    0x93FC65CE, 0x41EFC5EF, 0xFF7FEA6C, 0xFFEFFEF5, 0x6F7BA44D, 0xE1FEF7BA, 0xDFFDE226,
    0x87EF0FFF, 0xF51D87E7, 0xFF7AFFBF, 0xD226FFF7, 0x7BDD37BD, 0xF11370FF, 0x27FFEFFE,
    0x2F7EF24F, 0xFFA9FABF, 0xBFFBD7FD, 0xEE9137FF, 0xFBDEE9BD, 0xF7889B87, 0xD73FFF7F,
    0x7FEABAE5, 0xEFFEF5FF, 0x7BA44DFF, 0xFEF7BA6F, 0xFDE226E1, 0x7BEFFFDF, 0x176C4F7F,
    0x9E7EF000, 0x00171D9F, 0xDF279000, 0xCFD5FDEF, 0xAE000005, 0x00175D7B, 0x9EE79800,
    0x3F3DCFA9, 0xE5FFC8C1, 0x9E72D8BA, 0x2F73E97B, 0x08000001, 0x34F73E84, 0x746BCBFB,
    0x7DBF370F, 0xFB3FFD63, 0x0CEFF2DE, 0xBE000000, 0xB107BF17, 0x1FFBFF19, 0x77FF7FF7,
    0x06000060, 0xFFDFFDC6, 0xF9E1FBC5, 0xDFF8C761, 0xFBFFB8FF, 0x000303BF, 0xFFEE3030,
    0xC93CAFFE, 0xEAFCBDFB, 0x7FEFFC67, 0xDFFDFFDC, 0x18000181, 0xFF7FF718, 0x1AF2FED7,
    0x6FCDC3DD, 0x8FFDFF8F, 0x3BFFBFFB, 0x03000030, 0xFFEFFEE3, 0x35D72EBA, 0xEE3FF7FE,
    0xC0EFFEFF, 0x8C0C0000, 0xCBFFBFFB, 0xCDEC00DE, 0x7BDEF7BD, 0xB2F7BDEF, 0xDFF8C037,
    0x7FF750FF, 0x606BB7FF, 0x6A25307C, 0xE307EE40, 0xDD6F06D7, 0xE2F7C5FF, 0x173620F7,
    0x40000017, 0x739DF2CA, 0xFCF0FDE0, 0x02E2E3B0, 0x59480000, 0x790E73BE, 0xF97BF792,
    0x05C5CFD5, 0xB2900000, 0xAE1CE77C, 0x5C5D75CB, 0x29000000, 0x81CE77CB, 0xC3F3C3F7,
    0x7F887F8E, 0xF7FDAA95, 0x42AA55DF, 0xB1667844, 0x21454DDF, 0x8DEC2A83, 0x00002E2A,
    0xBBA7DF8C, 0x000046FC, 0xF76DEE11, 0x5D70004C, 0xE21FEBAE, 0xFF6AA55F, 0xAA9577FD,
    0x599E1110, 0x515377EC, 0x7B0AA0C8, 0x00000AA3

  EW_FONT_KERNING_CODES( ApplicationTimeFont )
  EW_FONT_KERNING_VALUES( ApplicationTimeFont )
EW_END_OF_FONT_RES( ApplicationTimeFont )

/* Embedded Wizard */
