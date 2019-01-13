
global STACK
STACK=list()

def nothing():
	print 'non'
	return None
	
def push(val):
	STACK.append(val)
	
def pop():
	STACK.pop()
	
def add():
    a=STACK[-2]
    b=STACK[-1]
    [pop() for _ in range(2)] #do pop twice
    push(a+b)
    
    
def subtract():
    a=STACK[-2]
    b=STACK[-1]
    [pop() for _ in range(2)]#do pop twice
    push(a-b)
    
def multiply():
    a=STACK[-2]
    b=STACK[-1]
    [pop() for _ in range(2)]#do pop twice
    push(a*b)
    
def divide():
    a=STACK[-2]
    b=STACK[-1]
    
    if b != 0: # do division only if divisor is NOT 0. Else, do nothing 
		[pop() for _ in range(2)]#do pop twice
		push(a/b)
		
    
    
    
hue_col_cycle_operations={'h0t0': nothing}

Piet_program= [['h0t0', 0], [0, 0]]

for row in Piet_program: 
	for codel in row:
		if codel in hue_col_cycle_operations.keys():
			hue_col_cycle_operations[codel]()
