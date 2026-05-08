import os

def transpose_char(c, amount):
    if ord(c)>=65 and ord(c)<=90:
        new_ord = ((ord(c)+amount-65) % (90-65+1))+65
        return chr(new_ord)
    elif ord(c)>=97 and ord(c)<=122:
        new_ord = ((ord(c)+amount-97) % (122-97+1))+97
        return chr(new_ord)
    return ""

def swapcase(text):
    return text.swapcase()

def swapcase_alphabet(text, alphabet):
    new_text = ""
    for c in text:
        if c in alphabet:
            new_text += c.swapcase()
        else:
            new_text += c
    return new_text

def transpose_text(text, amount):
    new_text = ""
    for c in text:
        if c.isalpha():
            new_text = new_text + transpose_char(c,amount)
        else:
            new_text += c
    return new_text

def transpose_text_lower(text, amount):
    new_text = ""
    for c in text:
        if c.isalpha() and c.islower() :
            new_text += transpose_char(c,amount)
        else:
            new_text += c
    return new_text

def transpose_digraphs(text, amount, digraphs):
    new_text = ""
    for i in range(len(text)-1):
        c = text[i]
        if c.isalpha() and text[i:i+2].lower() not in digraphs:
            new_text += transpose_char(c,amount)
            last = False
        else:
            new_text += c
            last = True
    i+=1
    c = text[i]    
    if last:
        new_text += c
    else:
        new_text += transpose_char(c,amount)
            
    return new_text


def transpose_rotation(text, amount, increment):
    new_text = ""
    for i in range(len(text)-1):
        c = text[i]
        if c.isalpha():
            new_text += transpose_char(c,amount)
            amount+=increment
        else:
            new_text += c
    return new_text

def caesar_cipher(text, alphabet, cipher):
    alphabet = alphabet.lower() + alphabet.upper()
    cipher = cipher.lower() + cipher.upper()
    
    new_text = ""
    for c in text:
        if c in alphabet:
            i = alphabet.index(c)
            new_text += cipher[i] 
        else:
            new_text += c
    return new_text

def convert_file(filename, outputfile, f, args = []):
    with open(filename,'r', encoding="utf-8") as file:
        text = file.read()
        if len(args) == 0:
            newtext = f(text)
        else:
            newtext = f(text, *args)
    
    with open(os.path.abspath(outputfile),'w') as file:
        file.write(newtext)
    return None
    
def main():
    path = os.path.dirname(os.path.abspath(__file__))
    file = 'chapter1.txt'
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), swapcase)

    file = 'chapter2.txt'
    f = swapcase_alphabet
    args = ['string']
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

    file = 'chapter3.txt'
    f = transpose_text
    args = [1]
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

    file = 'chapter4.txt'
    f = transpose_text_lower
    args = [-1]
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

    file = 'chapter5.txt'
    f = caesar_cipher
    args = ["abcdefghijklmnopqrstuvwxyz", "qwertyuiopasdfghjklzxcvbnm"]
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

    file = 'chapter6.txt'
    f = transpose_digraphs
    args = [2, ['th', 'er', 'on', 'an', 're', 'he', 'in', 'ed']]
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

    file = 'chapter7.txt'
    f = transpose_rotation
    args = [1, 1]
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)


    
    file = 'chapter8.txt'
    f = swapcase_alphabet
    args = ['theory']
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

    file = 'chapter9.txt'
    f = transpose_text
    args = [5]
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

    file = 'chapter10.txt'
    f = transpose_text
    args = [-2]
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

    file = 'chapter11.txt'
    f = transpose_text_lower
    args = [11]
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

    file = 'chapter12.txt'
    f = transpose_text_lower
    args = [20]
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

    file = 'chapter13.txt'
    f = caesar_cipher
    args = ["abcdefghijklmnopqrstuvwxyz", "poiuytrewqasdfghjklmnbvcxz"]
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

    file = 'chapter14.txt'
    f = transpose_rotation
    args = [8, 1]
    convert_file(os.path.join(path, file), os.path.join(path,'mod_files', file), f, args)

main()
 
